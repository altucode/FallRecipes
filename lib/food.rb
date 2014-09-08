require 'convenience'

module Food

  def self.search(expression, uri_only = false)
    params = {
      oauth_consumer_key: ENV['FS_ACCESS_KEY_ID'],
      oauth_nonce: SecureRandom.hex,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Time.now.to_i,
      oauth_version: "1.0",
      format: 'json',
      method: 'foods.search',
      search_expression: expression.esc
    }
    uri_only ? uri(params) : results = JSON.parse(Net::HTTP.get(uri(params)))['foods']['food']
  end

  def self.get(food_id, uri_only = false)
    params = {
      oauth_consumer_key: ENV['FS_ACCESS_KEY_ID'],
      oauth_nonce: SecureRandom.hex,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Time.now.to_i,
      oauth_version: "1.0",
      format: 'json',
      method: 'food.get',
      food_id: food_id
    }
    uri_only ? uri(params) : results = JSON.parse(Net::HTTP.get(uri(params)))['food']
  end

  def self.uri(params)
    sorted_params = params.sort {|a, b| a.first.to_s <=> b.first.to_s}
    base = base_string("GET", sorted_params)
    http_params = http_params("GET", params)
    sig = sign(base).esc
    uri = uri_for(http_params, sig)
  end

  private
  SITE = "http://platform.fatsecret.com/rest/server.api"

  def self.base_string(http_method, param_pairs)
    param_str = param_pairs.collect{|pair| "#{pair.first}=#{pair.last}"}.join('&')
    list = [http_method.esc, SITE.esc, param_str.esc]
    list.join("&")
  end

  def self.http_params(method, args)
    pairs = args.sort {|a, b| a.first.to_s <=> b.first.to_s}
    list = []
    pairs.inject(list) {|arr, pair| arr << "#{pair.first.to_s}=#{pair.last}"}
    list.join("&")
  end

  def self.sign(base, token='')
    secret = "#{ENV['FS_SECRET_ACCESS_KEY'].esc}&#{token.esc}"
    base64 = Base64.encode64(OpenSSL::HMAC.digest('sha1', secret, base)).gsub(/\n/,
  '')
  end

  def self.uri_for(params, signature)
    parts = params.split('&')
    parts << "oauth_signature=#{signature}"
    URI.parse("#{SITE}?#{parts.join('&')}")
  end
end