(function () {
  if (!window.acode) return;

  acode.define("laravel-blade", {
    name: "Laravel Blade Advanced",
    description: "Blade syntax highlight, snippets & autocomplete for aCode",
    author: "your-username",
    version: "2.0.0"
  });

  acode.registerLanguage({
    id: "blade",
    extensions: [".blade.php"],
    aliases: ["Blade", "Laravel"],
    mimetypes: ["text/x-blade"],
    mode: "html",
    rules: [
      { regex: /@\w+/g, token: "keyword" },
      { regex: /{{\s*[\s\S]*?\s*}}/g, token: "variable" },
      { regex: /{!!\s*[\s\S]*?\s*!!}/g, token: "variable" },
      { regex: /{{--[\s\S]*?--}}/g, token: "comment" },
      { regex: /\$[a-zA-Z_]\w*/g, token: "variable" }
    ]
  });

  acode.registerAutocomplete("blade", [
    "@if", "@elseif", "@else", "@endif",
    "@foreach", "@endforeach",
    "@for", "@endfor",
    "@while", "@endwhile",
    "@extends", "@section", "@endsection",
    "@yield", "@include",
    "@csrf", "@method",
    "@php", "@endphp",
    "@auth", "@endauth",
    "@guest", "@endguest"
  ]);

  acode.registerSnippets("blade", {
    "if": {
      prefix: "if",
      body: "@if (${1:condition})\n\t$0\n@endif"
    },
    "foreach": {
      prefix: "foreach",
      body: "@foreach (${1:$items} as ${2:$item})\n\t$0\n@endforeach"
    },
    "section": {
      prefix: "section",
      body: "@section('${1:name}')\n\t$0\n@endsection"
    },
    "extends": {
      prefix: "extends",
      body: "@extends('${1:layout}')"
    },
    "csrf": {
      prefix: "csrf",
      body: "@csrf"
    }
  });
})();
