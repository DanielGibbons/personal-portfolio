import React from "react"

import {PrismCode} from "../../components/prism-code"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlogPosts from "../../data/blog-posts"
import BlogHeader from "../../components/blog-header";

const blogPost = BlogPosts.find(bp => bp.id === 'BP_2019_11_01_00')

const BP_2019_11_01_00Page = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogHeader blogData={blogPost}/>
    <div class="blog-post-container">
      <h2 class="sub-title">Overview</h2>
      <p class="body-text">
        On the web, the <strong>Hyper Text Transfer Protocol (HTTP)</strong> has been the primary protocol for requesting and delivering
        hypermedia documents such as web pages for years, although it is not encrypted and therefore unsecure. The solution
        to this insecurity is <strong>HTTPS</strong>. HTTPS is effectively HTTP with security which utilises <strong>Transport Layer Security (TLS)</strong> to
        encrypt the transfer of data through the use of certificates. This security protocol involves three components - a
        certificate authority, a private key and a public certificate. The certificate authority is a company like GoDaddy or
        LetsEncrypt which has been approved to verify domains and issue secure signed certificates and keys. The private key
        is used by the website when it responds to a client request to encrypt the data in its reply. Along with the reply
        the website sends its public certificate to the client and the browser decrypts the sent message using this
        certificate. With this protocol the browser can verify that the data received has indeed been sent by the intended
        sender.
      </p>
      <h2 class="sub-title">Requesting a Certificate from GoDaddy</h2>
      <p class="body-text">
        I'm not going to go in to too much detail here as the steps on the website are pretty self explanatory. However, one
        thing to note is that there is no need to provide GoDaddy with a certificate request (CSR) using IIS which is what
        many tutorials recommend. You can simply allow GoDaddy to generate the certificate request itself. Once you've
        followed the steps it may take a while for GoDaddy to issue your private key and certificates (mine took
        approximately 24 hours).
      </p>
      <h2 class="sub-title">Downloading Private Key and CSR</h2>
      <p class="body-text">
        These are the first things to download from GoDaddy. I haven't had any use for the CSR yet, although its good to keep
        for your records. As you can probably gather from the name the private key must be kept private.
      </p>
      <h2 class="sub-title">Downloading Certificates</h2>
      <p class="body-text">
        This is the slightly confusing bit (or at least I thought so). You'll have a number of download options such as
        <strong>Apache</strong> or <strong>IIS</strong> although I'd recommend you download the 'other' option. In this package you'll get a <strong>crt</strong> file, a
        <strong>pem</strong> file and a certificate authority <strong>crt</strong> file. Copy the contents of this folder so that these certificates
        are in the same directory as the <strong>private key</strong> and <strong>CSR</strong> you previously downloaded.
      </p>
      <h2 class="sub-title">Creating a PFX Certificate</h2>
      <p class="body-text">
        In your directory you should now have 2 public certificates - a <strong>crt</strong> and a <strong>pem</strong> which for all intents and purposes
        are equivalent. You'll also have a 'bundle' certificate authority, mine was called <strong>g2_bundle-g2-g1.crt</strong>; a <strong>private key</strong> file and a <strong>CSR</strong> file.
      </p>
      <ul>
        <li class="body-text">
          Now run the following command replacing the certificates and key names with your filenames:
        </li>
      </ul>
      <PrismCode
        code = {
          `openssl pks12 -out <domain_name>.pfx -in <public_certificate_name>.crt -inkey <private_key_name>.key -cafile <godaddy_ca>.crt`
        }
        language = "bash"
        plugins={["show-language", "line-numbers"]}
      />
      <ul>
        <li class="body-text">
          If the command above fails to load your private key file run the following command to correct the file's encoding.
          After doing so rerun the previous <code class="language-bash">openssl</code> command but use the modified version of your private key.
        </li>
      </ul>
      <PrismCode
        code = {
          `tail -c +4 <private_key_name>.key > <private_key_modified_name>.key`
        }
        language = "bash"
        plugins={["show-language", "line-numbers"]}
      />
      <p class="body-text">
        Upon executing the <code class="language-bash">openssl</code> command you will be prompted to enter a password to lock your PFX file.
      </p>
      <h2 class="sub-title">Uploading PFX Certificate to Azure App Service</h2>
      <p class="body-text">
        On your app service resource head to the <strong>Custom Domains</strong> section and add an <strong>SSL</strong> binding to the domain
        which you generated your SSL certificates for. All you have to do is upload the certificate and enter the password
        that you set for your PFX certificate using <code class="language-bash">openssl</code>.
      </p>
    </div>
  </Layout>
)

export default BP_2019_11_01_00Page