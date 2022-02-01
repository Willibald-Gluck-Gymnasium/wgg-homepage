<?php

 namespace Tests\Feature;

 use Illuminate\Foundation\Testing\RefreshDatabase;
 use Tests\TestCase;

 class ExampleTest extends TestCase
 {
     /**
      * Tests home route.
      *
      * @return void
      */
     public function testHome()
     {
         $response = $this->get('/');

         $response->assertStatus(200);
     }

     /**
      * Tests impressum route.
      *
      * @return void
      */
     public function testImpressum()
     {
         $response = $this->get('/impressum');

         $response->assertStatus(200);
     }

     /**
      * Tests datenschutz route.
      *
      * @return void
      */
     public function testDatenschutz()
     {
         $response = $this->get('/datenschutz');

         $response->assertStatus(200);
     }

     /**
      * Tests license route.
      *
      * @return void
      */
     public function testLicense()
     {
         $response = $this->get('/license');

         $response->assertStatus(200);
     }
     
     /**
      * Tests articles API route.
      *
      * @return void
      */
     public function testArticlesAPI()
     {
         $response = $this->get('/api/v1/articles');

         $response->assertStatus(200);
     }
 }
