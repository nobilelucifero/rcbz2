import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import Header from "../components/Header/Header";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Header />;
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {children}
    </div>
  );
}
