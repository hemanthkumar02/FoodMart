<template>
    <section id="latest-blog" class="py-5">
      <div class="container-fluid">
        <div class="row">
          <div class="section-header d-flex align-items-center justify-content-between my-5">
            <h2 class="section-title">Our Recent Blog</h2>
            <div class="btn-wrap align-right">
              <a href="#" class="d-flex align-items-center nav-link">Read All Articles <svg width="24" height="24"><use xlink:href="#arrow-right"></use></svg></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
            <article class="post-item card border-0 shadow-sm p-3">
              <div class="image-holder zoom-effect">
                <a href="#">
                  <img :src="blog.image" alt="post" class="card-img-top">
                </a>
              </div>
              <div class="card-body">
                <div class="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                  <div class="meta-date"><svg width="16" height="16"><use xlink:href="#calendar"></use></svg>{{ blog.date }}</div>
                  <div class="meta-categories"><svg width="16" height="16"><use xlink:href="#category"></use></svg>{{ blog.categories }}</div>
                </div>
                <div class="post-header">
                  <h3 class="post-title">
                    <a href="#" class="text-decoration-none">{{ blog.title }}</a>
                  </h3>
                  <p>{{ blog.content }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
    name: 'Blog',
    mounted() {
        this.fetchBlogItems();
    },
    methods: {
        fetchBlogItems() {
            this.$store.dispatch('blogStore/fetchBlogItems')
        }
    },
    computed: {
        blogs() {
            return this.$store.state.blogStore.blogs;
        }
    }
}
</script>
