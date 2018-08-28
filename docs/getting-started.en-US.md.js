webpackJsonp([8],{

/***/ 1284:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "Installation"
    ],
    [
      "h3",
      "Using npm or yarn"
    ],
    [
      "p",
      [
        "strong",
        "We recommend using npm or yarn to install"
      ],
      "，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> modo-mobile --save"
      },
      [
        "code",
        "$ npm install modo-mobile --save"
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add modo-mobile"
      },
      [
        "code",
        "$ yarn add modo-mobile"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "If you are in a bad network environment，you can try other registries and tools like ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/cnpm/cnpm"
          },
          "cnpm"
        ],
        "."
      ]
    ],
    [
      "h3",
      "Import in Browser"
    ],
    [
      "pre",
      {
        "lang": "html",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/modo-mobile/dist/modo-mobile.min.css<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\" spellcheck=\"true\">&lt;!-- window['modo-mobile'] --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/modo-mobile/dist/modo-mobile.min.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script language-javascript\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<link rel=\"stylesheet\" href=\"https://unpkg.com/modo-mobile/dist/modo-mobile.min.css\">\n\n<!-- window['modo-mobile'] -->\n<script src=\"https://unpkg.com/modo-mobile/dist/modo-mobile.min.js\"></script>"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        [
          "strong",
          "We strongly discourage loading the entire files"
        ],
        " this will add bloat to your application and make it more difficult to receive bugfixes and updates."
      ]
    ],
    [
      "h2",
      "Usage"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Icon } from 'modo-mobile';\nReactDOM.render(<Icon />, mountNode);"
      ]
    ],
    [
      "p",
      "And import stylesheets manually:"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'modo-mobile/dist/modo-mobile.css'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// or 'modo-mobile/dist/modo-mobile.less'</span>"
      },
      [
        "code",
        "import 'modo-mobile/dist/modo-mobile.css'; // or 'modo-mobile/dist/modo-mobile.less'"
      ]
    ],
    [
      "h3",
      "Use modularized antd"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Use ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/babel-plugin-import"
            },
            "babel-plugin-import"
          ],
          " (Recommended)"
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// .babelrc or babel-loader option</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"plugins\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">[</span><span class=\"token string\">\"import\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token string\">\"libraryName\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"modo-mobile\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"libraryDirectory\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"es\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"style\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"css\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span> <span class=\"token comment\" spellcheck=\"true\">// `style: true` for less</span>\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "// .babelrc or babel-loader option\n{\n  \"plugins\": [\n    [\"import\", { \"libraryName\": \"modo-mobile\", \"libraryDirectory\": \"es\", \"style\": \"css\" }] // `style: true` for less\n  ]\n}"
          ]
        ],
        [
          "blockquote",
          [
            "p",
            "Note: Don't set ",
            [
              "code",
              "libraryDirectory"
            ],
            " if you are using webpack 1."
          ]
        ],
        [
          "p",
          "This allows you to import components from modo-mobile without having to manually import the corresponding stylesheet. The modo-mobile babel plugin will automatically import stylesheets."
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// import js and css modularly, parsed by babel-plugin-import</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile'</span><span class=\"token punctuation\">;</span>"
          },
          [
            "code",
            "// import js and css modularly, parsed by babel-plugin-import\nimport { Icon } from 'modo-mobile';"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Manually import"
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'modo-mobile/lib/icon'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// for js</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'modo-mobile/lib/icon/style/css'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// for css</span>\n<span class=\"token comment\" spellcheck=\"true\">// import 'modo-mobile/lib/icon/style';         // that will import less</span>"
          },
          [
            "code",
            "import Icon from 'modo-mobile/lib/icon'; // for js\nimport 'modo-mobile/lib/icon/style/css'; // for css\n// import 'modo-mobile/lib/icon/style';         // that will import less"
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 1,
    "title": "Getting Started",
    "filename": "docs/getting-started.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Installation",
          "title": "Installation"
        },
        "Installation"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Usage",
          "title": "Usage"
        },
        "Usage"
      ]
    ]
  ]
};

/***/ })

});
//# sourceMappingURL=getting-started.en-US.md.js.map