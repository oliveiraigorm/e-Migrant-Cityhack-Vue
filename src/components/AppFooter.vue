<script setup></script>

<template>
  <footer class="mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto text-center">
          <ul class="list-inline mb-3">
            <li class="list-inline-item">
              <a href="#" aria-label="Twitter" class="text-secondary">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" aria-label="Facebook" class="text-secondary">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" aria-label="GitHub" class="text-secondary">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted mb-0">
            &copy; {{ new Date().getFullYear() }} e-Migrant. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
