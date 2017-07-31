#!/usr/bin/env node

runBash('bash convert.sh')

function runBash(bash, options = {}) {
    return new Promise((resolve, reject) => {
        const p = require('child_process').exec(bash, options, error => {
            if (error) {
                reject(error)
                return
            }
            resolve()
        })
        p.stderr.pipe(process.stderr)
        p.stdout.pipe(process.stdout)
    })
}
