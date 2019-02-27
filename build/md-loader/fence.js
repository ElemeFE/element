// 覆盖默认的 fence 渲染策略
module.exports = md => {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (token.info === 'html') {
      return `<div class="source" slot="source" v-pre>${md.utils.escapeHtml(token.content)}</div>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
};
