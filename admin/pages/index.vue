<template>
  <main>
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">


        <div class="col-sm-8 col-8">

          <h1 class="a-size-large a-spacing-none a-text-normal">All products</h1>
          <div class="a-spacing-large"></div>

          <a href="#" class="a-button-buy-again">Add new product</a>
          <a href="#" class="a-button-history margin-right-10">Add new category</a>
          <a href="#" class="a-button-buy-again margin-right-10">Add new owner</a>
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">

          <div class="history-box">
            <!--          product page-->
            <a href="#" class="a-link-normal">
              <img src="" class="img-fluid" alt="">
            </a>

            <div class="a-spacing-top-base asin-title">
            <span class="a-text-normal">
              <div class="p13n-sc-truncated">Title </div>
            </span>
            </div>

            <div class="a-row">
              <a href="#">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small asin-reviews">(1732)</span>
            </div>
          </div>
          <!--price-->
          <div class="a-row">
            <span class="p13-sc-price">$25</span>
          </div>
          <!--byttons-->
          <div class="a-row">
            <a href="#" class="a-button-history margin-right-10">Update</a>
            <a href="#" class="a-button-history margin-right-10">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>

  export default {

    async asyncData({$axios}) {
      try {

        let response = await $axios.get("http://localhost:3000/api/products");
        console.log(response);
        return {
          products: products
        };
      } catch (err) {

        console.log(err);

      }
    }
  };
</script>

