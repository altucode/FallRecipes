require 'cgi'

class Hash
  def hmap(&block)
    each_with_object({}) { |(k, v), o| o[k] = block.(k, v) }
  end

  def hmap!(&block)
    replace(hmap(&block))
  end
end

class String
  def float?
    !!Float(self) rescue false
  end

  def numeric?
    !!self.match(/\A[0-9.\"]+\Z/)
  end

  def parenthesize
    self.empty? ? self : "(#{self})"
  end

  def esc
    CGI.escape(self).gsub("%7E", "~").gsub("+", "%20")
  end
end