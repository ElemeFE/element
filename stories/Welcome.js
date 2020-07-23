// eslint-disable-next-line no-console
const log = () => console.log('Welcome to storybook!');

export default {
  name: 'welcome',

  props: {
    showApp: {
      type: Function,
      default: log,
    },
  },

  data() {
    return {
      main: {
        padding: 15,
        lineHeight: 1.4,
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
        backgroundColor: '#ffffff',
      },

      logo: {
        width: 200,
      },

      link: {
        color: '#1474f3',
        textDecoration: 'none',
        borderBottom: '1px solid #1474f3',
        paddingBottom: 2,
      },

      code: {
        fontSize: 15,
        fontWeight: 600,
        padding: '2px 5px',
        border: '1px solid #eae9e9',
        borderRadius: 4,
        backgroundColor: '#f3f2f2',
        color: '#3a3a3a',
      },

      note: {
        opacity: 0.5,
      },
    };
  },

  template: `
    <div :style="main">
      <h1>Welcome to STORYBOOK</h1>
      <p>
        This is a UI component dev environment for your app.
      </p>
      <p>
        We've added some basic stories inside the
        <br />
        <code :style="code">src/stories</code>
        <br />
        directory.
        <br />
        A story is a single state of one or more UI components. You can have as many stories as
        you want.
        <br />
        (Basically a story is like a visual test case.)
      </p>
      <p>
        See these sample
        <br />
        <a :style="link" @click="onClick" role="button" tabIndex="0">stories</a>
        <br />
        for a component called
        <br />
        <code :style="code">Button</code>
        .
      </p>
      <p>
        Just like that, you can add your own components as stories.
        <br />
        You can also edit those components and see changes right away.
        <br />
        (Try editing the <code :style="code">Button</code> component
        located at <code :style="code">src/stories/Button.js</code>.)
      </p>
      <p>
        This is just one thing you can do with Storybook.
        <br />
        Have a look at the
        <br />
        <a
          :style="link"
          href="https://github.com/storybookjs/storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook
        </a>
        <br />
        repo for more information.
      </p>
      <p :style="note">
        <b>NOTE:</b>
        <br />
        Have a look at the
        <br />
        <code :style="code">.storybook/webpack.config.js</code>
        <br />
        to add webpack
        loaders and plugins you are using in this project.
      </p>
    </div>
  `,

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    },
  },
};
