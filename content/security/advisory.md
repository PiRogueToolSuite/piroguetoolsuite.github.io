---
title: "Security Advisory"
description: "Security Advisory"
draft: false
type: download
toc: false
images: []
---

<div class="col-md-12">
    <p>
        This page gives an overview of the already known vulnerabilities of the different components we deliver. Those vulnerabilities have been automatically detected and reported by scanning both the code and the final package using <a href="https://codeql.github.com/">CodeQL</a> and <a href="https://docs.docker.com/scout/">Docker Scout</a>.
    </p>
</div>
<div class="col-md-12">
    <h2 class="mb-0">Report a vulnerability</h2>
    <p>
    In order for the vulnerability reports to reach maintainers as soon as possible, the preferred way is to use the Report a vulnerability button on the Security tab in the respective GitHub repository. It creates a private communication channel between the reporter and the maintainers.
    </p>
    <p>
    If you are absolutely unable to or have strong reasons not to use GitHub reporting workflow, please reach out to the maintainers at <samp>contact[at]defensive-lab.agency</samp>, providing all relevant information. The more details you provide, the easier it will be for us to triage and fix the issue.
    </p>
    <p>
    Please refer to our <a href="/security/disclosure">Vulnerability Disclosure Policy</a>.
    </p>
</div>
<div class="col-md-12">
    <h2 class="mb-0">Summary</h2>
    <div class="table-responsive">
        <table class="table table-sm small">
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Packaging</th>
                    <th>Severity</th>
                    <th>Rule / Vulnerability</th>
                </tr>
            </thead>
            <tbody>
                {{< advisory-lines name="Colander" type="Docker image" url="data/advisory/colander.json">}}
                {{< advisory-lines name="Threatr" type="Docker image" url="data/advisory/threatr.json">}}
                {{< advisory-lines name="Playwright" type="Docker image" url="data/advisory/playwright.json">}}
            </tbody>
        </table>
    </div>
</div>

<div class="col-md-12">
    <h2 class="mb-0">Details</h2>
</div>

<div class="col-md-12">
    <h3 class="mb-1">Colander Docker image <a href="https://github.com/PiRogueToolSuite/colander" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a></h3>
    {{< advisory url="data/advisory/colander.json">}}
</div>
<div class="col-md-12">
    <h3 class="mb-1">Threatr Docker image <a href="https://github.com/PiRogueToolSuite/threatr" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a></h3>
    {{< advisory url="data/advisory/threatr.json">}}
</div>
<div class="col-md-12">
    <h3 class="mb-1">Playwright REST API Docker image <a href="https://github.com/PiRogueToolSuite/playwright-rest-api" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a></h3>
    {{< advisory url="data/advisory/playwright.json">}}
</div>



