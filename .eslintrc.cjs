module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'mockData.ts'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        'react',
        '@typescript-eslint',
        'fp',
        'simple-import-sort',
        'import',
        'react-hooks'
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            // fixed by reporting in https://github.com/lydell/eslint-plugin-simple-import-sort/issues/54
            {
                groups: [
                    [
                        '^@?[a-z]'
                    ], // anything that starts with @ and lowercase
                    [
                        '^[^.\\u0000]'
                    ], // anything but a dot and side effect imports
                    [
                        '^\\.'
                    ], // starting with dot
                    [
                        '^\\u0000'
                    ] // side effect imports
                ]
            }
        ],
        'sort-imports': 'off',
        'import/order': 'off',
        'import/no-cycle': [
            'error',
            {
                maxDepth: 4
            }
        ],
        'fp/no-arguments': 'error',
        'fp/no-delete': 'error',
        'no-var': 'error',
        'css-rcurlyexpected': 0,
        'react/static-property-placement': [
            'error',
            'static public field'
        ],
        // Force boolean prop naming with isXX
        'react/boolean-prop-naming': ['error', { rule: '^is[A-Z]([A-Za-z0-9]?)+' }],
        'no-restricted-globals': [
            'error',
            'isFinite',
            'isNaN'
        ],
        'max-len': [
            2,
            {
                ignoreComments: true,
                ignoreUrls: true,
                code: 120
            }
        ],
        'no-shadow': 0,
        'class-methods-use-this': 0,
        'camelcase': 0,
        'no-underscore-dangle': 'off',
        'template-curly-spacing': 'off',
        'computed-property-spacing': 'off',
        'import/no-unresolved': 0,
        'import/named': 0,
        'no-plusplus': 0,
        'linebreak-style': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_'
            }
        ],
        'react/react-in-jsx-scope': 0,
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'always',
                allowMultiline: false,
                children: true
            }
        ],
        'react/jsx-no-useless-fragment': [
            2,
            {
                max: 2
            }
        ],
        curly: [
            2,
            'all'
        ],
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
        'react/button-has-type': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': 0,
        'react/jsx-no-bind': [
            2,
            {
                ignoreDOMComponents: false,
                ignoreRefs: true,
                allowArrowFunctions: false,
                allowFunctions: false,
                allowBind: false
            }
        ],
        'react/no-deprecated': 2,
        'new-cap': [
            'error',
            {
                newIsCap: true
            }
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc',
                    'sum'
                ]
            }
        ],
        indent: [
            'error',
            4,
            {
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild'
                ]
            }
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'no-case-declarations': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var'
                ],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: [
                    'const',
                    'let',
                    'var'
                ],
                next: [
                    'const',
                    'let',
                    'var'
                ]
            },
            {
                blankLine: 'always',
                prev: [
                    'block',
                    'block-like',
                    'multiline-block-like',
                    'multiline-expression',
                    'multiline-const',
                    'multiline-let',
                    'multiline-var'
                ],
                next: 'return'
            },
            {
                blankLine: 'any',
                prev: [
                    'singleline-const',
                    'singleline-let',
                    'singleline-var'
                ],
                next: '*'
            }
        ],
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        'no-extra-semi': 'error',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function'
            }
        ],
        'no-debugger': 0,
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        '@typescript-eslint/ban-types': [
            'error',
            {
                'types': {
                    'Function': false,
                },
                'extendDefaults': true
            }
        ]
    },
};
