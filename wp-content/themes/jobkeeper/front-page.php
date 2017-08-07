<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<div class="head-search">
     <div class="wrapper">
        <div class="container-fluid">
           <div class="search-inner">
              <?php echo do_shortcode('[pods name="banner_heading" template="banner heading"]'); ?>
              <div class="row">
                 <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1  col-sm-10 col-sm-offset-1 col-xs-12 ">
                    <div class="search-box">
                      <div class="switch-tab">
                         <ul class="list-inline">
                           <li class="active" id="hire-freelancer"><a href="javascript:void(0);">Medarbejdere</a></li>
                           <li class="" id="hire-jobs"><a href="javascript:void(0);">Jobåbninger</a></li>
                         </ul>   

                      </div>
                            

                            <div class="form-group h-search-input">

                              <input autocapitalize="off" autocorrect="off" class="" id="fieldlocation" name="address" spellcheck="off" placeholder="By" autocomplete="off" type="text">


                              <input id="staff_city" value="" class="ng-untouched ng-pristine ng-valid" type="hidden">

                              <input id="job_city" value="" class="ng-untouched ng-pristine ng-valid" type="hidden">
                              
                            </div>
                                                
                            <!--template bindings={}--><div class="form-group h-search-input" id="staff-select">
                              
                              <section id="intro">                 
                                  <select class="form-control ng-untouched ng-pristine ng-valid" name="professionId">

                                    <option value="">alle erhverv</option>  
                                    <!--template bindings={}--><option value="3">
                                      Bygge og anlæg
                                    </option><option value="4">
                                      Handel
                                    </option><option value="5">
                                      Industri
                                    </option><option value="6">
                                      Kontor
                                    </option><option value="8">
                                      Hotel
                                    </option><option value="9">
                                      IT og telekommunikation
                                    </option><option value="10">
                                      Landbrug og fødevarer
                                    </option><option value="11">
                                      Rengøring
                                    </option><option value="12">
                                      Restauranter og barer
                                    </option><option value="13">
                                      Transport
                 				                   </option><option value="14">
                                      Social og sundhed
                                    </option><option value="15">
                                      
                                    </option>

                                  </select>
                              </section>

                            </div>


                            <!--template bindings={}-->


                            
                            <!--template bindings={}--><div class="butoon-outer">

                                 <input class="btn btn-light-green-small btn-go" value="Søg" type="button">
                           

                                 <!--template bindings={}-->
                            </div>

                            <!--template bindings={}-->  

                    </div>
                 </div>
              </div>
              
           </div>
        </div>
     </div>
  </div>
  <div class="clear"></div>
</section>
<div class="h-feature" id="feature">
            <div class="wrapper">
               <div class="container-fluid">
               <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 key-feature-bg">
                     <div class="feature-wrap">
                        <?php echo do_shortcode('[pods name="feature_heading" template="Feature headings"]'); ?>
                        <?php echo do_shortcode('[pods name="features" template="Features"]'); ?>
                        

                        
                     </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 about-us-bg">
                     <div class="about-us-wrap">
                      <?php echo do_shortcode('[pods name="about_heading" template="about headings"]'); ?>                       
                     <?php echo do_shortcode('[pods name="about_us" template="abouts us"]'); ?>  
                        
                     </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 prices-bg">
                     <div class="prices-wrap">
                     <?php echo do_shortcode('[pods name="prices_heading" template="Prices headings"]'); ?>                        
                         <div class="row">
                           <div class="col-md-12 col-sm-6 col-xs-12">
                           
                           <?php echo do_shortcode('[pods name="prices" template="Free subscription"]'); ?>  
                              </div>
                             
                      <div class="col-md-12 col-sm-6 col-xs-12">  
                  <div class="prices">
                           <?php echo do_shortcode('[pods name="price_company" template="Price company"]'); ?> 
                             <div class="payment-logo">
                                <ul class="list-inline">
                 		   <?php echo do_shortcode('[pods name="payment_logo" template="payment logo"]'); ?>                                  

                                </ul>

                              </div>                    
                        </div>
                         </div>

  
                        </div>
                     </div>
                  </div>
                  
               </div></div>
            </div>
            
         </div>
<div class="our-partner">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12">
			<?php echo do_shortcode('[pods name="partners_heading" template="Partners heading"]'); ?>                                
         </div>
         <div class="col-sm-12 col-md-12 partner-img col-xs-12">
            <ul>
              <?php echo do_shortcode('[pods name="partners" template="partners"]'); ?>                
            </ul>
           
         </div>
         
       </div>


    </div>


  </div>

<?php get_footer();
