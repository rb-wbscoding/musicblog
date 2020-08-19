import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

import Styles from "./SocialMedia.module.css";

export default function SocialMedia() {
  return (
    <div className={Styles.social}>
      <SocialMediaIconsReact
        icon="facebook"
        iconColor="rgba(222, 222, 214, 0.9)"
        backgroundColor="inherit"
        iconSize="3"
        roundness="0%"
        url="https://some-website.com/my-social-media-url"
        size="55"
      />
      <SocialMediaIconsReact
        icon="mail"
        iconColor="rgba(222, 222, 214, 0.9)"
        backgroundColor="inherit"
        iconSize="3"
        roundness="0%"
        url="https://some-website.com/my-social-media-url"
        size="55"
      />
      <SocialMediaIconsReact
        icon="youtube-play"
        iconColor="rgba(222, 222, 214, 0.9)"
        backgroundColor="inherit"
        iconSize="3"
        roundness="0%"
        url="https://some-website.com/my-social-media-url"
        size="55"
      />
      <SocialMediaIconsReact
        icon="github"
        iconColor="rgba(222, 222, 214, 0.9)"
        backgroundColor="inherit"
        iconSize="3"
        roundness="0%"
        url="https://some-website.com/my-social-media-url"
        size="55"
      />
    </div>
  );
}
