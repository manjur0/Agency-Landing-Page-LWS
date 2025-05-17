import React from "react";
import ArbnbIcon from "./SVG/ArbnbIcon";
import GoogleIcon from "./SVG/GoogleIcon";
import MicrosoftIcon from "./SVG/MicrosoftIcon";
import SpotifyIcon from "./SVG/SpotifyIcon";
import MashIcon from "./SVG/MashIcon";
import MailchimpIcon from "./SVG/MailchimpIcon";

const CompanysLogo = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <ArbnbIcon />

          <GoogleIcon />

          <MicrosoftIcon />

          <SpotifyIcon />

          <MailchimpIcon />
          <MashIcon />
        </div>
      </div>
    </section>
  );
};

export default CompanysLogo;
