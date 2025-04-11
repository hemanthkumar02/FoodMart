<template>
  <div class="container-fluid">
    <div class="row py-3">
      <div
        class="d-flex justify-content-center justify-content-sm-between align-items-center"
      >
        <nav class="main-menu d-flex navbar navbar-expand-lg">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon" @click="navbarToggleIcon"></span>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            ref="offcanvas"
          >
            <div class="offcanvas-header justify-content-center">
              <button
                @click="navbarToggleIcon"
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul
                class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0"
              >
                <li
                  v-for="item in items"
                  :key="item.id"
                  :class="[
                    item.isDropdown ? 'nav-item dropdown' : 'nav-item',
                    activeClass === item.name ? 'active' : '',
                  ]"
                >
                  <a
                    :href="item.link"
                    :class="[
                      'nav-link',
                      item.isDropdown ? 'dropdown-toggle' : '',
                    ]"
                    @click="handleNavClick(item)"
                    >{{ item.name }}</a
                  >
                  <ul
                    v-show="item.isDropdown && item.dropdownItems.length > 0"
                    :class="['dropdown-menu']"
                    aria-labelledby="pages"
                    ref="dropdownMenu"
                  >
                    <li
                      v-for="dropdownitem in item.dropdownItems"
                      :key="dropdownitem.id"
                    >
                      <router-link
                        :to="dropdownitem.link"
                        :class="'dropdown-item'"
                        >{{ dropdownitem.name }}
                      </router-link>
                    </li>
                  </ul>
                </li>
                <template v-if="isAuthenticated">
                  <li class="nav-item">
                    <a href="#" class="nav-link" @click="logoutUser">Logout</a>
                  </li>
                </template>
                <template v-else>
                  <li class="nav-item">
                    <a href="/login" class="nav-link">Login</a>
                  </li>
                  <li class="nav-item">
                    <a href="/sign-up" class="nav-link">Register</a>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { Offcanvas, Dropdown } from "bootstrap";

export default {
  name: "SubHeader",
  props: ["items"],
  data() {
    return {
      activeClass: "",
      showDropdown: false,
      showSideBar: false,
      offcanvasInstance: null,
      dropdownInstance: null,
    };
  },
  mounted() {
    this.checkAuth();
    this.offcanvasInstance = new Offcanvas(this.$refs.offcanvas);
    this.dropdownInstance = this.$refs.dropdownMenu.map(
      (menu) => new Dropdown(menu)
    );
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('userStore/logout')
    },
    checkAuth() {
      this.isAuthenticated;
    },
    handleNavClick(item, event) {
      this.setActiveClass(item.text);
      item.dropdownItems.length > 0 ? this.toggleDropdown() : null;
    },
    setActiveClass(navItem) {
      this.activeClass = navItem;
    },
    toggleDropdown() {
      console.log(this.$refs.dropdownMenu);
      if (this.showDropdown === false) {
        this.dropdownInstance.forEach((dropdown) => dropdown.show());
        this.showDropdown = true;
      } else {
        this.dropdownInstance.forEach((dropdown) => dropdown.hide());
        this.showDropdown = false;
      }
    },
    navbarToggleIcon() {
      if (this.showSideBar) {
        this.showSideBar = false;
        this.offcanvasInstance.hide();
      } else {
        this.offcanvasInstance.show();
        this.showSideBar = true;
      }
    },
    handleClickOutside(event) {
      if (this.showDropdown) {
        const isClickInsideDropdown = this.$refs.dropdownMenu.some((menu) =>
          menu.contains(event.target)
        );
        const isClickOnToggle =
          event.target.classList.contains("dropdown-toggle");
        if (
          (isClickInsideDropdown || !isClickInsideDropdown) &&
          !isClickOnToggle
        ) {
          if (this.dropdownInstance) {
            this.dropdownInstance.forEach((dropdown) => dropdown.hide());
            this.showDropdown = false;
          }
        }
      }
    },
  },
  computed: {
    isAuthenticated() {
      const user = this.$store.getters["userStore/isAuthenticated"][0];
      if (user == null) return false;
      return true;
    },
  },
};
</script>
