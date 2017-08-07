<?php
 /* Template Name: signup */ 

get_header(); ?>



<section  class="breadcrumb-block after-fixed">
   <div  class="wrapper">
      <div  class="container-fluid">
         <div  class="registration-title">
            <h1 > Velkommen til Jobkeeper </h1>
         </div>
      </div>
   </div>
</section>
<section  class=" registration-wrap ">
   <div  class="wrapper">
      <div  class="container">
         <div  class="row">
            <form  name="myForm" novalidate="" class="ng-untouched ng-pristine ng-invalid">
               <input  name="companyName" class="ng-untouched ng-pristine ng-valid" value="" type="hidden">
               <input  name="companyName" class="ng-untouched ng-pristine ng-valid" value="" type="hidden">
               <div  class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                  <div  class="row">
                     <div  class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div  class="row">
                           <div  class="col-lg-6 col-md-6 col-sm-6 form-group registration-fields">
                              <label  for="vatno"> CVR </label>
                              <input  class="form-control input-empty ng-untouched ng-pristine ng-invalid" id="vatno" maxlength="20" minlength="3" name="vatno" pattern="^[0-9]+$" required="" placeholder="Indtast CVR her" type="text">
                           </div>
                           <div  class="col-lg-6 col-md-6 col-sm-6 form-group registration-fields">
                              <label  form="email"> Email adresse </label>
                              <input  class="form-control input-empty ng-untouched ng-pristine ng-invalid" id="email" name="email" pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" required="" placeholder="Indtast e-mail-adresse" type="email">
                              <!--template bindings={}-->
                           </div>
                        </div>
                     </div>
                     <div  class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div  class="row">
                           <div  class="col-lg-6 col-md-6 col-sm-6 form-group registration-fields">
                              <label  for="password">Adgangskode </label>
                              <label  class="">  </label>
                              <input  class="form-control progress-bar-input ng-untouched ng-pristine ng-invalid" id="password" name="password" required="" reverse="true" validateequal="confirmPassword" placeholder="Indtast adgangskode" type="password">
                              <!--template bindings={}-->
                           </div>
                           <div  class="col-lg-6 col-md-6 col-sm-6 form-group registration-fields">
                              <label > Bekræft adgangskode </label>
                              <label  class="">  </label>
                              <input  class="form-control progress-bar-input ng-untouched ng-pristine ng-invalid" id="confirmPassword" maxlength="50" minlength="5" name="confirmPassword" required="" validateequal="password" placeholder="Bekræft adgangskode" type="password">
                              <!--template bindings={}-->
                              <div  class=" Strong-password-text clearfix">
                                 <password-strength-bar >
                                    <div id="strength">
                                       <small>Styrke:</small>
                                       <ul id="strengthBar">
                                          <li class="point" style="background-color: rgb(221, 221, 221);"></li>
                                          <li class="point" style="background-color: rgb(221, 221, 221);"></li>
                                          <li class="point" style="background-color: rgb(221, 221, 221);"></li>
                                          <li class="point" style="background-color: rgb(221, 221, 221);"></li>
                                          <li class="point" style="background-color: rgb(221, 221, 221);"></li>
                                       </ul>
                                    </div>
                                 </password-strength-bar>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div  class=" registration-terms ">
                        <p >
                           <input  class="ng-untouched ng-pristine ng-invalid" name="terms" required="" type="checkbox"> <span >Jeg er enig med </span>
                           <span  class="terms_text" data-target="#termCondition" data-toggle="modal">
                           betingelserne
                           </span>
                           <br >
                           <!--template bindings={}-->
                        </p>
                     </div>
                     <div  class=" registration-btn-wrap ">
                        <div  class="butoon-outer-login">
                           <input  class="btn btn-normal" value="Opret virksomhedens profil" type="submit">
                           <!--template bindings={}-->
                        </div>
                     </div>
                     <div  class=" login-btn-wrap "> 
                        <a  class="btn btn-login"  href="<?php echo site_url(); ?>/login"> Log ind <i  aria-hidden="true" class="fa fa-sign-in fa-login-icon"></i> </a> 
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</section>




<?php get_footer();
