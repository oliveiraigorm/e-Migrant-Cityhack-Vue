<script setup>
import PageHeader from '@/components/PageHeader.vue'
import iptImg from '@/assets/img/ipt.jpg'
</script>

<template>
  <div>
    <PageHeader :background-image="iptImg" title="Instituto Politecnico de Tomar" />

  <section class="container mb-5">
    <div class="row">
      <div class="col-lg-9 col-md-10 mx-auto">
        <div class="accordion" id="iptAccordion">
          <!-- Internship documents -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                All you need for your internship at IPT
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#iptAccordion">
              <div class="accordion-body">
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <a
                      href="http://www.gri.ipt.pt/download/site/gri/1516/INCOM/1516student.doc"
                      target="_blank"
                      rel="noopener"
                      class="text-decoration-none"
                    >
                      <i class="fas fa-file-word me-2 text-primary"></i>Student Application Form
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="http://www.gri.ipt.pt/download/site/gri/1516/INCOM/1516NAOStudies.docx"
                      target="_blank"
                      rel="noopener"
                      class="text-decoration-none"
                    >
                      <i class="fas fa-file-word me-2 text-primary"></i>Learning Agreement for Studies
                    </a>
                    &nbsp;or&nbsp;
                    <a
                      href="http://www.gri.ipt.pt/download/site/gri/1516/INCOM/1516NAOTraineeships.docx"
                      target="_blank"
                      rel="noopener"
                      class="text-decoration-none"
                    >
                      Learning Agreement for Traineeships
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Accommodation -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Where can I stay?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#iptAccordion">
              <div class="accordion-body">
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <a
                      href="http://www.gri.ipt.pt/download/site/gri/1516/INCOM/1516accommodationstudentsstaff.doc"
                      target="_blank"
                      rel="noopener"
                      class="text-decoration-none"
                    >
                      <i class="fas fa-file-word me-2 text-primary"></i>Application Form for Accommodation at IPT
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.esnportugal.org/contact"
                      target="_blank"
                      rel="noopener"
                      class="text-decoration-none"
                    >
                      <i class="fas fa-users me-2 text-primary"></i>Contact ESN volunteers for help finding accommodation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
