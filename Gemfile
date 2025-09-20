source "https://rubygems.org"

# Jekyll version
gem "jekyll", "~> 4.3.0"

# Jekyll theme (if using a specific theme)
# gem "minima", "~> 2.5"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Jekyll plugins
group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.12'
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sass-converter'
end