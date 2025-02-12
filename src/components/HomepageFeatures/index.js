import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Design',
  //   Svg: require('@site/static/img/undraw_computer_apps.svg').default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  {
    title: 'Blog Posts',
    Svg: require('@site/static/img/undraw_post.svg').default,
    description: (
      <>
        Follow along as I research and design new projects.
      </>
    ),
  },
  {
    title: 'Links and Articles',
    Svg: require('@site/static/img/undraw_online-articles.svg').default,
    description: (
      <>
        Coming soon!
      </>
    ),
  },
  // {
  //   title: 'Development',
  //   Svg: require('@site/static/img/undraw_website1.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--2">
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          <div className="col col--2">
          </div>
        </div>
      </div>
    </section>
  );
}
