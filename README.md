# vsts-npm-auth

VSTS(Azure DevOps) private npm feed authenticator action.

## Usage

```yml
- uses: iamvishnusankar/vsts-npm-auth@master
  with:
    registry: ${{ secrets.NPM_REGISTRY }}
    token: ${{ secrets.NPM_TOKEN }}
    username: ${{ secrets.NPM_USERNAME }}
```

## Options

| name        | default | description                                        |
| ----------- | ------- | -------------------------------------------------- |
| registry    | -       | VSTS private feed registry url                     |
| always-auth | true    | Auth policy                                        |
| token       | -       | VSTS Feed PAT with minimum package read permission |
| username    | -       | VSTS Feed username                                 |

## TODO

- documentation
