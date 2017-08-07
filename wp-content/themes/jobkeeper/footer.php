<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */

?>

</div><!-- #content -->
<footer  class="footer-bg" id="contact">
            <div  class="wrapper">
               <div  class="container-fluid">
                     <?php echo do_shortcode('[pods name="footer_contact_headi" template="footer contact heading"]'); ?>                                  
                 
                  <div  class="row">
                     <div  class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1  col-sm-10 col-sm-offset-1 col-xs-12 ">
                        <div  class="f-search-box">
                           
                              <div  class="form-group f-search-input">
                                 <input  autocapitalize="off" autocorrect="off" class="" id="fieldlocation" name="address_foot" spellcheck="off" placeholder="By" autocomplete="off" type="text">
                                 <input  id="footer_cityy" value="" class="ng-untouched ng-pristine ng-valid" type="hidden">
                                
                              </div>
                              <div  class="f-calender-outer f-calender-input">
                                 <div  class="input-group date">
                                    <input  class="footer_fromdate ng-untouched ng-pristine ng-valid" id="footer_fromdate" name="footer_fromdate" placeholder="Start" type="text">
                                    <span  class="input-group-addon"><i  aria-hidden="true" class="fa fa-calendar-o fa-calender-icon"></i></span>
                                 </div>
                              </div>
                              <div  class="f-calender-outer f-calender-input">
                                 <div  class="input-group date">
                                    <input  class="footer_fromdate ng-untouched ng-pristine ng-valid" id="footer_todate" name="footer_todate" placeholder="Slut" type="text">
                                    <span  class="input-group-addon"><i  aria-hidden="true" class="fa fa-calendar-o fa-calender-icon"></i></span>
                                 </div>
                              </div>
                              <div  class="form-group h-search-input">
                                 <section  id="intro">
                     <select  class="form-control ng-untouched ng-pristine ng-valid" name="professionId">
                        <option  value="">alle erhverv</option>  
                        <option  value="3">
                          Bygge og anlæg
                        </option><option  value="4">
                          Handel
                        </option><option  value="5">
                          Industri
                        </option><option  value="6">
                          Kontor
                        </option><option  value="8">
                          Hotel
                        </option><option  value="9">
                          IT og telekommunikation
                        </option><option  value="10">
                          Landbrug og fødevarer
                        </option><option  value="11">
                          Rengøring
                        </option><option  value="12">
                          Restauranter og barer
                        </option><option  value="13">
                          Transport
                        </option><option  value="14">
                          Social og sundhed
                        </option><option  value="15">
                          
                        </option><option  value="16">
                          tester
                        </option>
                 
                </select>
                    
                                 </section>
                              </div>


                             
                               <div  class="butoon-outer">

                               <input  class="btn  btn-light-green-small btn-go" value="Søg" type="button">
                         

                               <!--template bindings={}-->
                              </div> 
                           
                        </div>
                     </div>
                  </div>
                  
                  <div  class="container no-padding">
                     <div  class="row footer-contact-wrap">
                        <div  class="col-lg-12  col-md-12 col-sm-12 col-xs-12 ">


                           <?php echo do_shortcode('[pods name="footer_contact" template="footer contact E-mail"]'); ?>                              

                           <?php echo do_shortcode('[pods name="footer_contact_phone" template="Footer contact phone"]'); ?>
                           
                           <?php echo do_shortcode('[pods name="footer_contact_time" template="footer contact time"]'); ?>
                           
                        </div>
                     </div>
                     
                  </div>
                  <div  class="footer-btm">
                     <div  class="row">
                        <div  class="col-lg-8 col-md-8 col-sm-12 col-xs-12 m-footer-links">
                           <div  class="footer-links">
                              <ul >
                                <?php echo do_shortcode('[pods name="footer_links" template="footer links"]'); ?>
                              </ul>
                           </div>
                        </div>
                        <div  class="col-lg-2 col-md-2 col-sm-12  col-xs-12 m-footer-left-links">
                           <div  class="footer-left-links">
                              <?php echo do_shortcode('[pods name="privacy_text" template="term text"]'); ?>
                              <a  data-target="#myModal2" data-toggle="modal" href="javascript:void(0);">                              

                               <?php echo do_shortcode('[pods name="pravicy_policy_title" template="pravicy policy title"]'); ?> </a>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
         </footer>

        <div  class="staff-popup-estimate request-commision-popup footer-popup privacy_polici_popup">
          <div  class="modal fade" id="myModal2" role="dialog">
            <div  class="modal-dialog">

            
            <div  class="modal-content">
              <div  class="modal-header">
              <button  class="close" data-dismiss="modal" type="button" data-original-title="" title=""><i  aria-hidden="true" class="fa fa-times-circle"></i>  </button>
              <h2  class="modal-title"><?php echo  get_field('term_title'); ?></h2>  

                
              </div>
              <div  class="modal-body">
                <?php echo $text = get_field('term_and_condition'); ?>                
                </div>  
              
            </div>

            </div>
          </div>
        </div>
        <article >
            <a  class="scrollup" href="#" style="display: block;"> <i  aria-hidden="true" class="fa fa-angle-up fa-scrollup"></i> </a>
         </article>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

      <script type="text/javascript">
          $(document).ready(function() {

            $('.nav-custom a').click(function () {
            var id = $(this).attr('href');
            var hash1 = id;          
             
              $('html, body').animate({ scrollTop: $(hash1).offset().top }, 600, function(){

              });
              return false;

          });
         $('#snavvy').snavvy({
         menuItems: '#snavvy-links'
         });



          });

        </script>


      <script data-turbolinks-track="true" src="<?php echo get_bloginfo('template_url'); ?>/assets/js/bootstrap.min.js"></script>
      <script data-turbolinks-track="true" src="<?php echo get_bloginfo('template_url'); ?>/assets/js/custom.js"></script>
      <script src="<?php echo get_bloginfo('template_url'); ?>/assets/js/zelect.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/js/bootstrap-datepicker.min.js"></script>
       <script src="<?php echo get_bloginfo('template_url'); ?>/assets/js/snavvy.js"></script> 
      <script>
         $(document).ready(function() {
         
         $('#snavvy').snavvy({
         menuItems: '#snavvy-links'
         });
         
         });
      </script>

<?php wp_footer(); ?>

</body>
</html>
