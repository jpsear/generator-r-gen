const copyTemplate = (template, path, extension, context, data = {}) => {
  return context.fs.copyTpl(
    context.templatePath(`${template}.${extension}`),
    context.destinationPath(`${path}.${extension}`),
    { data }
  )
}

module.exports = { copyTemplate };
