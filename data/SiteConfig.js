const config = {
  siteTitle: "Riccardo Buzzotta", // Site title.
  siteTitleShort: "RCBZ", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Personal website of Riccardo Buzzotta", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Personal website of Riccardo Buzzotta.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Riccardo Buzzotta", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Riccardo Buzzotta", // Username to display in the author segment.
  userEmail: "riccardo.buzzotta@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "creativespooks", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Somewhere, Earth. 🌍🌏🌎", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "Too many tabs open 24/7. Also, Product and Design.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/nobilelucifero",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/creativespooks",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:riccardo.buzzotta@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021. Riccardo Buzzotta", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  experiences: [
    {
      company: "Spotify",
      role: "Senior Product Designer",
      start: "Apr 2018",
      end: "Current",
    },
    {
      company: "Consulting, Freelance",
      role: "Product and Design",
      start: "2010",
      end: "Current",
    },
    {
      company: "GetYourGuide",
      role: "Product Designer",
      start: "Sep 2014",
      end: "Sep 2016",
    },
    {
      company: "Frestyl",
      role: "Product and Design",
      start: "Apr 2014",
      end: "Jul 2014",
    },
    {
      company: "Urlist",
      role: "Front-end Developer",
      start: "Oct 2012",
      end: "Jan 2014",
    },
    {
      company: "Nooo Agency",
      role: "PHP Dev → Art Director",
      start: "Feb 2011",
      end: "Oct 2012",
    },
    {
      company: "libreriauniversitaria.it",
      role: "Web Graphic Designer",
      start: "Oct 2010",
      end: "Jan 2011",
    },
  ],
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
