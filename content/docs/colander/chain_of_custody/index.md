---
title: "Chain of custody"
draft: false
images: []
menu:
  docs:
    parent: "colander"
weight: 580
toc: true
---

In the intricate domain of digital forensics, maintaining confidentiality is paramount to protect sensitive information and ensure the integrity of investigations. Two widely adopted confidentiality frameworks, Traffic Light Protocol (TLP) and Permissible Actions Protocol (PAP), provide structured guidelines for sharing and restricting access to sensitive data. These frameworks empower digital forensic practitioners to navigate the delicate balance between information sharing and confidentiality.

## TLP & PAP

The **Traffic Light Protocol** (TLP) employs a color-coded system to classify information and guide its dissemination: 
* `TLP:RED`: Information is highly sensitive and should only be shared with authorized individuals on a limited basis, safeguarding highly confidential or classified data. 
* `TLP:AMBER`: Information is restricted to specific individuals or organizations with a need-to-know basis, ensuring targeted sharing for specific purposes. 
* `TLP:GREEN`: Information can be shared within a defined community, such as law enforcement or industry partners, enabling collaboration within trusted circles.
* `TLP:CLEAR`: Information can be shared openly without limitations, facilitating widespread dissemination.

**Permissible Actions Protocol** (PAP) focuses on restricting access to specific individuals, providing a more granular approach to confidentiality:
* `PAP:RED`: Non-detectable actions only. Recipients may not use PAP:RED information on the network. Only passive actions on logs, that are not detectable from the outside.
* `PAP:AMBER`: Recipients may use PAP:AMBER information for conducting online checks, like using services provided by third parties (e.g. VirusTotal), or set up a monitoring honeypot.
* `PAP:GREEN`: Active actions. Recipients may use PAP:GREEN information to ping the target, block incoming/outgoing traffic from/to the target or specifically configure honeypots to interact with the target.
* `PAP:CLEAR`: Open, no restrictions

The application of TLP and PAP frameworks varies depending on the nature of the information and the context of the investigation. TLP is often used in sharing threat intelligence, incident reports, or vulnerability information, while PAP is typically applied to specific documents, files, or datasets that require restricted access.

The benefits of employing TLP and PAP frameworks include:
* **Protection of sensitive information**: These frameworks prevent unauthorized disclosure of confidential data, ensuring that sensitive information remains protected from unauthorized access or leaks.
* **Facilitated information sharing**: They enable controlled dissemination of information among authorized parties, allowing for effective collaboration and sharing of knowledge while maintaining confidentiality.
* **Enhanced collaboration**: By providing a common language and understanding for managing sensitive data, TLP and PAP promote effective collaboration among different stakeholders involved in investigations.
* **Maintained trust and integrity**: The use of these frameworks upholds the trust and integrity of investigations and information sharing, ensuring that sensitive data is handled responsibly and with due diligence.

Traffic Light Protocol (TLP) and Permissible Actions Protocol (PAP) serve as essential tools for digital forensic practitioners, enabling them to effectively protect sensitive data while fostering collaboration and ensuring the integrity of investigations. By employing these frameworks, they can navigate the delicate balance between information sharing and confidentiality, ensuring that sensitive information is disseminated appropriately and securely.

## Artifact integrity

In addition to the 2 frameworks listed above, it is crucial to implement mechanisms ensuring digital artifact/evidence integrity and proving their origin that are crucial in maintaining the authenticity and trustworthiness of digital information. SHA-256 file hash, detached RSA signature, and the signer's public key are fundamental tools employed to achieve this goal.

### SHA-256 file hash

SHA-256 (Secure Hash Algorithm 256) is a cryptographic hash function that generates a unique fingerprint or hash value for a given digital file. This hash value serves as a reliable identifier for the file's content, ensuring that any modifications to the file will result in a different hash value.

### Detached RSA signature

A detached RSA signature is a cryptographic signature that is created separately from the original file. The signer uses their private RSA key to encrypt a hash value of the file, generating a signature file. The signature file can then be attached to the original file or stored separately.

### Signer's Public Key

The signer's public key is a component of the RSA key pair that is used to verify the detached RSA signature. Anyone can obtain and use the public key to decrypt the signature file, revealing the original hash value.

## Artifact integrity verification

To verify the integrity and origin of a digital file using SHA-256 file hash, detached RSA signature, and the signer's public key, follow these steps:

1. Compute the SHA-256 hash value of the original file. This can be done using various tools or libraries available for different platforms.

2. Verify the detached RSA signature using the signer's public key. Decrypt the signature file using the signer's public key, revealing the hash value embedded within.

3. Compare the computed hash value with the hash value extracted from the detached RSA signature. If the two hash values match, it confirms that the file has not been tampered with since it was signed.

Using a detached RSA signature offers several advantages:

* **Independent verification**: The signature can be verified independently without the original file, allowing for easier verification and storage.

* **Integrity protection**: The signature protects the hash value, ensuring that any modifications to the file will invalidate the signature and reveal tampering.

* **Long-term integrity**: The signature can be used to verify the file's integrity even if the original file is lost or corrupted.

Utilizing SHA-256 file hash, detached RSA signature, and the signer's public key provides a robust and reliable method for ensuring digital evidence integrity and proving its origin. These techniques are widely used in various fields, including forensics, legal investigations, and software distribution, to safeguard the authenticity and trustworthiness of digital information.