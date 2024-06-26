import React from "react";
// Homepage Demo
import HomeDefault from "../views/all-home-version/HomeDefault";
// About
import AboutUs from "../views/inner-pages/about/AboutUs";

// Partners
import Partners from '../views/inner-pages/partners/Partners';

// Blog
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import BlogMasonry from "../views/inner-pages/blog/BlogMasonry";
import BlogDetails from "../views/inner-pages/blog/BlogDetails";

// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";

// Others
import Contact from "../views/inner-pages/Contact";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        {/* About */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* brands */}
        <Route path="/brands" element={<Partners />} />

        {/* Blog */}
        <Route path="/projects" element={<BlogMasonry />} />
        <Route path="/news" element={<BlogGrid />} />
        <Route path="/news-details/:id" element={<BlogDetails />} />
       
        {/* Portfolio */}
        <Route path="/case-studies" element={<WorksGrid />} />
        <Route path="/case-details/:id" element={<WorksShowcase />} />

        {/* others */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
