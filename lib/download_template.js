const downLoad = require('download-git-repo')
const ora = require('ora')
let clone = false
let url = '18390966122/frame' // git 路径
let name = 'args'

let downGit = (name) => {
	const spinner = ora('正在拉取模板...')
	spinner.start()
	downLoad(url, name, {
		clone
	}, err => {
		spinner.stop()
		console(err ? err : '项目创建成功')
		process.exit(1)
	})
}
module.exports = downGit