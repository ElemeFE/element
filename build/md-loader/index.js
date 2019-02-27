const {
  stripScript,
  stripStyle,
  stripTemplate,
  genInlineComponentText
} = require('./util');
const md = require('./config');

module.exports = function(source) {
  const content = md.render(source);

  const startTag = '<!--element-demo:';
  const startTagLen = startTag.length;
  const endTag = ':element-demo-->';
  const endTagLen = endTag.length;

  let componenetsString = '';
  let styleSheets = ''; // md 提取的样式
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(commentStart + startTagLen, commentEnd);
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    const style = stripStyle(commentContent);
    styleSheets += style;
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `element-demo${id}`;
    output.push(`<${demoComponentName} slot="source" />`);
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;

    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }

  output.push(content.slice(start));
  styleSheets = styleSheets.trim();
  if (styleSheets) {
    styleSheets = `<style>${styleSheets}</style>`;
  }
  return `
    <template>
      <section class="content element-doc">
        ${output.join('')}
      </section>
    </template>
    <script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>
    ${styleSheets}
  `;
};
