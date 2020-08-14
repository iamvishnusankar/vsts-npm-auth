import * as core from '@actions/core'

try {
  console.log(core.getInput('registry'), core.getInput('always-auth'))
} catch (error) {
  core.setFailed(error.message)
}
