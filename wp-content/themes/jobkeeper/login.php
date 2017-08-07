<?php
 /* Template Name: login*/ 

get_header(); ?>

<section class="breadcrumb-block after-fixed">
	<div class="wrapper">
		<div class="container-fluid">
			 <div class="registration-title"> 
				 <h1> Login til Jobkeeper </h1>
			 </div>
		</div>
	</div>

</section>

<section class=" login-wrap ">
	 <div class="wrapper">
		 <div class="container">
			
			<div class="login-account-wrap">
				<form name="form" novalidate="" class="ng-untouched ng-pristine ng-invalid">
					<div class="form-group registration-fields">
						
						<input class="form-control ng-untouched ng-pristine ng-invalid" name="username" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required="" placeholder="Email adresse" type="email">
						<!--template bindings={}-->
					</div>
					<div class="form-group registration-fields">
						


						
						 <input class="form-control ng-untouched ng-pristine ng-invalid" name="password" required="" placeholder="Adgangskode" type="password">

						 	



						 <!--template bindings={}-->
					</div>
					<div class="form-group login-fields">
					<h3><a routerlink="/forgot-password" href="#/forgot-password"> Glemt adgangskode <i aria-hidden="true" class="fa fa-lock"></i> </a> </h3>
						
					</div>

					<div class=" login-btn-wrap ">  

					 <div class="butoon-outer-login">	

						 <button class="btn btn-normal" data-original-title="" title="">

						 Log på</button>

						 <!--template bindings={}-->

					 </div>


					  </div>
					<div class=" login-btn-wrap ">


					
					 </div>
					<div class=" login-btn-wrap "> 
						<a class="btn btn-login" routerlink="/register" href="<?php echo site_url(); ?>/signup"> Opret en konto  <i aria-hidden="true" class="fa fa-briefcase"></i> </a> 
					</div>
				</form>		 
			</div>
					 
				
		 
		 </div>
	 </div>
</section>




<?php get_footer();
