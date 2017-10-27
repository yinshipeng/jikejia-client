const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'build')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'jikejia-win32-x64/'),
    authors: 'yinshipeng',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'jikejia.exe',
    setupExe: 'jikejiaInstaller.exe',
    setupIcon: path.join(rootPath, '/build/icons/jkj.ico')
  })
}
