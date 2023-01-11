import React from 'react';
import { Link } from 'gatsby';
import { Logo } from '../Logo';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from '../../hooks/use-media-query';
import { useSiteConfiguration } from '../../hooks/use-site-configuration';
import { Animation } from '../Animation';
import store from '../../store'
import * as classes from './style.module.css';

export function Header(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);
    const siteConfiguration = useSiteConfiguration();
    const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');
    const userinfo = store.getState().userinfo;
    const navigationItems = (
        <>
            {siteConfiguration.navigation.header.map((linkObject, key) => {
                return (
                    <Link
                        key={key}
                        to={linkObject.url}
                        className={classes.NavLink}
                        onClick={!isDesktopBreakpoint ? () => setOpen(!open) : undefined}
                    >
                        {linkObject.label}
                    </Link>
                );
            })}
            <a
                style={userinfo.hasGetInfo?{visibility:'hidden'}:undefined}
                href={siteConfiguration.navigation.ctaButton.url}
                target={siteConfiguration.navigation.ctaButton.openNewTab ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={classes.CtaButton}
                onClick={!isDesktopBreakpoint ? () => setOpen(!open) : undefined}
            >
                {userinfo.hasGetInfo?userinfo.userName:siteConfiguration.navigation.ctaButton.label}
            </a>
        </>
    );
    const sideNavigationBar = (
        <>
            <div className={classes.Burger} onClick={() => setOpen(!open)}>
                <div style={open ? { transform: 'rotate(45deg)' } : undefined} />
                <div style={open ? { transform: 'translateX(20px)', opacity: 0 } : undefined} />
                <div style={open ? { transform: 'rotate(-45deg)' } : undefined} />
            </div>
            <div
                className={classes.SideBarWrapper}
                style={open ? { transform: 'translateX(0%)', visibility: 'visible' } : undefined}
                aria-hidden={!open}
                tabIndex={open ? 1 : -1}
            >
                <nav className={classes.SideNavigationBar}>{navigationItems}</nav>
            </div>
            <div className={classes.SideBarBackdrop} style={open ? { display: 'block' } : undefined} />
        </>
    );

    const topNavigationBar = <nav className={classes.TopNavigationBar}>{navigationItems}</nav>;
    return (
      <header className={classes.Header}>
        {/* Make background blurry when sidebar is opened */}
        <Helmet
          bodyAttributes={{ class: open ? classes.Blurred : undefined }}
        />
        
          {/* <div className={classes.Content}> */}
          <Animation className={classes.ContentWrapper} type="fadeDown">
            <Link to="/" aria-label="home">
              <Logo fontSize="2rem" color="green" />
            </Link>
            {isDesktopBreakpoint ? topNavigationBar : sideNavigationBar}
            </Animation>
          {/* </div> */}
      </header>
    );
}
