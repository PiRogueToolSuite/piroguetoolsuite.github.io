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
    <h2 class="mb-2">Overview</h2>
    <div class="table-responsive m-0">
        <table class="table table-sm table-hover small mt-0">
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Severity</th>
                    <th>Rule / Vulnerability</th>
                </tr>
            </thead>
            <tbody>
                {{< advisory-lines url="data/advisory/pts.json">}}
            </tbody>
        </table>
    </div>
</div>

<div class="col-md-12">
    <h2 class="mb-2">Detected vulnerabilities</h2>
    {{< advisory url="data/advisory/pts.json">}}
</div>

