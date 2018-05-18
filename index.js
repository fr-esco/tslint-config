module.exports = {
  extends: [
    "tslint-config-standard"
  ],
  rules: {
    "adjacent-overload-signatures": true,
    align: true,
    "array-type": [
      true,
      "array"
    ],
    "arrow-parens": [
      true,
      "ban-single-arg-parens"
    ],
    "arrow-return-shorthand": true,
    ban: [
      true,
      "eval",
      {
        message: "Use a regular for loop instead.",
        name: [
          "*",
          "forEach"
        ]
      }
    ],
    "ban-comma-operator": true,
    "ban-types": [
      true,
      [
        "Object",
        "Use {} instead."
      ],
      [
        "String"
      ]
    ],
    "binary-expression-operand-order": true,
    "callable-types": true,
    "comment-format": [
      true,
      "check-space",
      "check-lowercase",
      {
        "ignore-words": [
          "TODO",
          "FIXME"
        ]
      }
    ],
    "cyclomatic-complexity": [
      true,
      5
    ],
    deprecation: true,
    encoding: true,
    forin: true,
    "import-blacklist": [
      true,
      "lodash",
      "rxjs",
      "rxjs/Rx"
    ],
    "import-spacing": true,
    indent: [
      true,
      "spaces",
      2
    ],
    "interface-name": [
      true,
      "never-prefix"
    ],
    "interface-over-type-literal": true,
    "match-default-export-name": true,
    "max-classes-per-file": [
      true,
      1
    ],
    "max-file-line-count": [
      true,
      300
    ],
    "max-line-length": [
      true,
      120
    ],
    "member-access": [
      true,
      "no-public"
    ],
    "member-ordering": [
      true,
      {
        alphabetize: true,
        order: "statics-first"
      }
    ],
    "newline-before-return": true,
    "newline-per-chained-call": true,
    "no-any": true,
    "no-bitwise": true,
    "no-boolean-literal-compare": true,
    "no-console": true,
    "no-construct": true,
    "no-debugger": true,
    "no-default-export": false,
    "no-duplicate-super": true,
    "no-duplicate-switch-case": true,
    "no-dynamic-delete": true,
    "no-empty-interface": true,
    "no-for-in-array": true,
    "no-implicit-dependencies": true,
    "no-import-side-effect": [
      true,
      {
        "ignore-module": "rxjs"
      }
    ],
    "no-inferrable-types": true,
    "no-inferred-empty-object-type": true,
    "no-invalid-template-strings": true,
    "no-invalid-this": [
      true,
      "check-function-in-method"
    ],
    "no-irregular-whitespace": true,
    "no-magic-numbers": true,
    "no-mergeable-namespace": true,
    "no-namespace": true,
    "no-non-null-assertion": true,
    "no-null-keyword": true,
    "no-object-literal-type-assertion": true,
    "no-parameter-properties": false,
    "no-parameter-reassignment": true,
    "no-redundant-jsdoc": true,
    "no-reference": true,
    "no-require-imports": true,
    "no-shadowed-variable": true,
    "no-sparse-arrays": true,
    "no-string-literal": true,
    "no-submodule-imports": [
      true,
      "rxjs"
    ],
    "no-this-assignment": true,
    "no-unbound-method": [
      true,
      "ignore-static"
    ],
    "no-unnecessary-callback-wrapper": true,
    "no-unnecessary-class": true,
    "no-unnecessary-initializer": true,
    "no-unsafe-finally": true,
    "no-var-requires": true,
    "no-void-expression": [
      true,
      "ignore-arrow-function-shorthand"
    ],
    "number-literal-format": true,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-shorthand": true,
    "object-literal-sort-keys": true,
    "one-variable-per-declaration": [
      true,
      "ignore-for-loop"
    ],
    "only-arrow-functions": [
      true,
      "allow-declarations",
      "allow-named-functions"
    ],
    "ordered-imports": [
      true,
      {
        "grouped-imports": true
      }
    ],
    "prefer-conditional-expression": [
      true,
      "check-else-if"
    ],
    "prefer-const": true,
    "prefer-for-of": true,
    "prefer-function-over-method": true,
    "prefer-method-signature": true,
    "prefer-object-spread": true,
    "prefer-readonly": true,
    "prefer-switch": true,
    "prefer-template": true,
    "prefer-while": true,
    "promise-function-async": true,
    quotemark: [
      true,
      "single",
      "avoid-escape",
      "avoid-template"
    ],
    "restrict-plus-operands": true,
    "space-before-function-paren": false,
    "switch-default": true,
    "switch-final-break": true,
    "trailing-comma": [
      true,
      {
        esSpecCompliant: true,
        multiline: {
          arrays: "always",
          functions: "never",
          objects: "always",
          typeLiterals: "ignore"
        }
      }
    ],
    "type-literal-delimiter": true,
    "use-default-type-parameter": true,
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-leading-underscore"
    ],
    whitespace: [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-preblock",
      "check-rest-spread",
      "check-separator",
      "check-type",
      "check-type-operator",
      "check-typecast"
    ]
  }
}