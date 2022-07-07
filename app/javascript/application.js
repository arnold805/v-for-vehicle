// Entry point for the build script in your package.json

// Rails plugs into frontend here in this file
// need index import. Once transpiler starts, this is only entrypoint needed because jsx imports resolve themselves

import "@hotwired/turbo-rails"
import "./index"
