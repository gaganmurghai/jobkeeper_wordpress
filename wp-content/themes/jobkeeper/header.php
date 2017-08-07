<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage jobkeeper
 * @since 1.0
 * @version 1.0
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
      <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_url'); ?>/assets/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_url'); ?>/assets/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker3.min.css">

      <link href="<?php echo get_bloginfo('template_url'); ?>/assets/css/owl.carousel.css" rel="stylesheet">
      <link href="<?php echo get_bloginfo('template_url'); ?>/assets/css/owl.theme.css" rel="stylesheet">
      <link href="<?php echo get_bloginfo('template_url'); ?>/assets/css/owl.transitions.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_url'); ?>/assets/css/main.css">

        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,900' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300,600italic' rel='stylesheet' type='text/css'>
       
</head>

<body <?php body_class(); ?>>



<section class="head-wrap " id="banner-section">


<nav  class="navbar navbar-inverse top fixed" id="header-home">

     <div  class="wrapper">
        <div  class="container-fluid ">
           <div  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 logo-outer">
              <div  class="navbar-header">
                 
                 <div  id="mobile-menu" >
                    <div  class="nav">
                       <div  class="no-padding col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <ul  class="fullmenu">
                             <li >
                                <a  id="snavvy" class="selector">
                                   <div  id="nav-icon"> <span ></span> <span ></span> <span ></span> <span ></span> </div>
                                </a>
                             </li>
                                <div  class="snavvy" id="snavvy-menu" style="width: 100%; left: 0px; ">         
                                 <div  class="fa fa-times" id="close-snavvy"></div>                   
                                
                                <div id="close-snavvy" class="fa fa-times"></div><div  class="snavvy-links" id="snavvy-links">
                                 <?php wp_nav_menu( array( 'menu'=>'top menu', 'menu_class' => 'links ', 'theme_location' => 'primary' ) ); ?> 
                                </div></div>
                          </ul>
                       </div>
                    </div>
                 </div>
                 
              </div>
              <?php echo do_shortcode('[pods name="top_logo" template="top logo"]'); ?>

              <div  class="mobile-account-login"><a  href="https://dev.jobkeeper.dk/#/login"> <i class="fa fa-sign-in fa-login-icon"></i> </a> </div>
           </div>
           <div  class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div  class="navbar-collapse collapse  " id="navbar">
                 <?php wp_nav_menu( array( 'menu'=>'top menu', 'menu_class' => 'nav navbar-nav  nav-custom ', 'theme_location' => 'primary' ) ); ?> 
                 
              </div>
              
           </div>
           <div  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 login-block">
              <div  class="navbar-collapse collapse" id="navbar">
                 <ul  class="nav navbar-nav navbar-right lang-nav">
                   
                    <li  class=" account-login" id="account-login">
                    <a  routerlink="/logout" href="https://dev.jobkeeper.dk/#/login">
                      Log på <i  class="fa fa-sign-in fa-login-icon"></i>
                    </a>
                    


                    </li>
                 </ul>
              </div>
              
           </div>
        </div>
     </div>
     
  </nav>




 