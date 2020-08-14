import core from '@actions/core'

const run = async () => {
  console.log(core.getInput('registry'), core.getInput('always-auth'))
}

try {
  run()
} catch (error) {
  core.setFailed(error.message)
}
