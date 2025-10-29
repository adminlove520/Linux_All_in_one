/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "647f80fcb04b4c560dc22b6e5133fa47"
  },
  {
    "url": "assets/css/0.styles.407428ab.css",
    "revision": "aa795cc02c39a7d9d9c16c63ccef25f0"
  },
  {
    "url": "assets/img/CentOS-7-Install-a-0.3f99e76b.jpg",
    "revision": "3f99e76b949964795898b6d06871526d"
  },
  {
    "url": "assets/img/moon.eb42da60.gif",
    "revision": "eb42da603d70bb602b5f5bfb2545589f"
  },
  {
    "url": "assets/img/Nginx-SSL-a-1.4e60f7c8.jpg",
    "revision": "4e60f7c8ad33f8445b02d2e2b560ce54"
  },
  {
    "url": "assets/img/Redis-GUI-a-1.9772c9a4.jpg",
    "revision": "9772c9a4a920325185888efdc18e23c8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bc260717.js",
    "revision": "cd5298687fcaef836a57fec84df88c89"
  },
  {
    "url": "assets/js/100.5e0212b4.js",
    "revision": "68326ef005c21671a2870c2198e85099"
  },
  {
    "url": "assets/js/101.280ba6c4.js",
    "revision": "e0a5311acfa451767b7b7e02ec6aad6d"
  },
  {
    "url": "assets/js/102.fcbe69ef.js",
    "revision": "8d1c5e36fbe977a2e4f829e6d3f24db4"
  },
  {
    "url": "assets/js/103.59b3bf86.js",
    "revision": "df230cc07ff28b375449fb0b4875c4fa"
  },
  {
    "url": "assets/js/104.628bb6be.js",
    "revision": "6a2553c0c89862b2404edabd76bbf67e"
  },
  {
    "url": "assets/js/105.f6a0a62b.js",
    "revision": "f30ddf36a06597d9cbb2e544ac625ef2"
  },
  {
    "url": "assets/js/106.53648c35.js",
    "revision": "b7e7af929cf0e840bc26d647f2932ee9"
  },
  {
    "url": "assets/js/107.093c4fab.js",
    "revision": "e992b782aa8788e7a7878b6c01ffc60b"
  },
  {
    "url": "assets/js/108.f8895b2f.js",
    "revision": "d5afdff16adc3524ad5c4fc4cb93f654"
  },
  {
    "url": "assets/js/109.878b5e6d.js",
    "revision": "8939289e0c3a13ea2b06c920b3dc42a3"
  },
  {
    "url": "assets/js/110.e7dbd5ce.js",
    "revision": "a2b6356c26edf8c8a4bade5f495a9b11"
  },
  {
    "url": "assets/js/12.4bdd7f50.js",
    "revision": "f0bfc65b8beff2b3734f5c7bddd07442"
  },
  {
    "url": "assets/js/13.4850c8c8.js",
    "revision": "45f10ae691fa964d6e8889994f1d9a9d"
  },
  {
    "url": "assets/js/14.66e24ed5.js",
    "revision": "336b04cfc0be90cb6661dab8858243b8"
  },
  {
    "url": "assets/js/15.41d57e79.js",
    "revision": "53eeca5a4ffb5c8bf92cf86bc8369ca6"
  },
  {
    "url": "assets/js/16.96600c16.js",
    "revision": "b8ae84b5b54558633d140075b431839f"
  },
  {
    "url": "assets/js/17.1cd68a21.js",
    "revision": "9d6dcb8db6dddaa49b8cefa7e88aa823"
  },
  {
    "url": "assets/js/18.f54ebd77.js",
    "revision": "dddba7d1a1ce4c8f70a62fdafc988974"
  },
  {
    "url": "assets/js/19.36d25975.js",
    "revision": "5c0c9520112b96852259fcaf937580ec"
  },
  {
    "url": "assets/js/2.ee3c5eb7.js",
    "revision": "5dcabb8f87973e7bbd347d601f361fea"
  },
  {
    "url": "assets/js/20.0120ca8c.js",
    "revision": "c7511c4fe54fa305214af61339c1c3c9"
  },
  {
    "url": "assets/js/21.f8578145.js",
    "revision": "602a97681cbd0eff14dfe87cff6eda19"
  },
  {
    "url": "assets/js/22.9efa850b.js",
    "revision": "836da58fa3449522c0e298e083a2d501"
  },
  {
    "url": "assets/js/23.d7f5441c.js",
    "revision": "9bdbebcd5d13a3979e9fd2fb092bc091"
  },
  {
    "url": "assets/js/24.1cabd94c.js",
    "revision": "9fac38f7a8305c34dda41ba216ad90eb"
  },
  {
    "url": "assets/js/25.2cb5712a.js",
    "revision": "25859833115c48bf4643c14c174f53ca"
  },
  {
    "url": "assets/js/26.440ab754.js",
    "revision": "a064d3ee97093fb856052aad7e4da496"
  },
  {
    "url": "assets/js/27.94e60af2.js",
    "revision": "7c40dbf99fed5883b5edc758a6d555ec"
  },
  {
    "url": "assets/js/28.f1611369.js",
    "revision": "a03a34e887715a6e3fef23fc0a06af9c"
  },
  {
    "url": "assets/js/29.730dead3.js",
    "revision": "cfedf4eabc1bc932c69c4a3dcb4aa994"
  },
  {
    "url": "assets/js/3.accc0318.js",
    "revision": "0402fe79bf99b55fb9ecce886f48dfba"
  },
  {
    "url": "assets/js/30.f69c3378.js",
    "revision": "cdcdfe9a25b57de6a2e510a2e0e42577"
  },
  {
    "url": "assets/js/31.be2478fc.js",
    "revision": "b46461461c9a2f2c45b6361517f9b2db"
  },
  {
    "url": "assets/js/32.9465ce70.js",
    "revision": "91a1d4e136985bdb1955a0b659f9304d"
  },
  {
    "url": "assets/js/33.f4c85e8a.js",
    "revision": "4687a7483f8518a59941b3b22edaeabf"
  },
  {
    "url": "assets/js/34.c3a0ece1.js",
    "revision": "2ecd7501a777c96660b6b5cff78b7f67"
  },
  {
    "url": "assets/js/35.a75dd538.js",
    "revision": "1a2d20b3851714d4bef041a5fcd582b4"
  },
  {
    "url": "assets/js/36.da0b8594.js",
    "revision": "c9cafa7c025a23a2a313db9d54659969"
  },
  {
    "url": "assets/js/37.c49eb234.js",
    "revision": "9e0dab525cd79fd0556ba5989c3315ba"
  },
  {
    "url": "assets/js/38.16f7d0e5.js",
    "revision": "0dabd40508291d5b2610e92fa531fd36"
  },
  {
    "url": "assets/js/39.ba6e47f0.js",
    "revision": "5c59a2750b51aabe3c2837314b5f580b"
  },
  {
    "url": "assets/js/4.9736648b.js",
    "revision": "da1094b23e3edd203fe12fb74594d09a"
  },
  {
    "url": "assets/js/40.664ddb58.js",
    "revision": "257f2cb76f6d0594ece2f15881b324e8"
  },
  {
    "url": "assets/js/41.4189f6ca.js",
    "revision": "36e88f6e280fa87b250ff794dbc0c706"
  },
  {
    "url": "assets/js/42.6472b832.js",
    "revision": "1b327f19689f386d7aa69acb15d61d3c"
  },
  {
    "url": "assets/js/43.c8d06688.js",
    "revision": "d94ca58f08caff7d64da82c085840f84"
  },
  {
    "url": "assets/js/44.e39a047e.js",
    "revision": "df5f94f8eaef53a8fb57b585db7b6780"
  },
  {
    "url": "assets/js/45.39945860.js",
    "revision": "fb35aac0f5ca738d77132d21d8d0cd1a"
  },
  {
    "url": "assets/js/46.ccbd9cdc.js",
    "revision": "babc3845e9306858cbdae655143facfe"
  },
  {
    "url": "assets/js/47.9bed3a75.js",
    "revision": "2029561859456d79a4cbc0162e31766d"
  },
  {
    "url": "assets/js/48.05ecd397.js",
    "revision": "fd8aaa6abc83f00475511b5de129f858"
  },
  {
    "url": "assets/js/49.4f2f2874.js",
    "revision": "5fe918c7503efd28bc50fa4d51236d10"
  },
  {
    "url": "assets/js/5.9a4eb5c9.js",
    "revision": "d5bf818f121b0b8783a90ac925d6047d"
  },
  {
    "url": "assets/js/50.d01632db.js",
    "revision": "82951c6d86ae1df62aea02d542e3e52e"
  },
  {
    "url": "assets/js/51.ad40e5f5.js",
    "revision": "caa6a0aae064be028d4f76d14da24d50"
  },
  {
    "url": "assets/js/52.bfacfa08.js",
    "revision": "ce2376e1b9682943b895b270875757c0"
  },
  {
    "url": "assets/js/53.9398692c.js",
    "revision": "8b0a0372a260c0a7bdf5b39ebfe0f9be"
  },
  {
    "url": "assets/js/54.b34cb199.js",
    "revision": "a26f09fe4570686c0d5704ba5d03c431"
  },
  {
    "url": "assets/js/55.6735c148.js",
    "revision": "8eaeb70bc8cb498bba3dbe22c1267e2f"
  },
  {
    "url": "assets/js/56.575312d7.js",
    "revision": "a38ff595a940f388e6e1a97fcdcd9a6e"
  },
  {
    "url": "assets/js/57.d54f0ac7.js",
    "revision": "9faeb2c1284fd79c1ceccf866f13944d"
  },
  {
    "url": "assets/js/58.f3cc4cf5.js",
    "revision": "ccb1692c0e43b56731c52484ba3898bb"
  },
  {
    "url": "assets/js/59.881dba8f.js",
    "revision": "c889e056bd5b2fbe04362996200093b0"
  },
  {
    "url": "assets/js/6.a3475002.js",
    "revision": "476a66257a5267d21945232dc902451a"
  },
  {
    "url": "assets/js/60.859faf8a.js",
    "revision": "dd59dcc3528b4ff5f86b3c89ab0e575d"
  },
  {
    "url": "assets/js/61.4efca474.js",
    "revision": "64835e81ea3342c8b9b4af9300b45af9"
  },
  {
    "url": "assets/js/62.578a9742.js",
    "revision": "d52d53afa3dfff595929a131baef801e"
  },
  {
    "url": "assets/js/63.95e6ff4f.js",
    "revision": "d0a80d07319ddfafb17df3cec5ff9e7b"
  },
  {
    "url": "assets/js/64.054ab297.js",
    "revision": "3731b84a1288e845a2aed26baf24ffb5"
  },
  {
    "url": "assets/js/65.5be33d9b.js",
    "revision": "9eb2a216cc07a84236627732f3e25d94"
  },
  {
    "url": "assets/js/66.2312529e.js",
    "revision": "0623a87d8ed63e14d72a78fbc64253ee"
  },
  {
    "url": "assets/js/67.81dd084d.js",
    "revision": "1e6c3d628390c670da3c1173cf8cccbf"
  },
  {
    "url": "assets/js/68.a11966f3.js",
    "revision": "8cdbd387303cd86ec55165f1ca7c6931"
  },
  {
    "url": "assets/js/69.ffbf7d57.js",
    "revision": "9e7b4e5d432bc25886c930a19d57fa6a"
  },
  {
    "url": "assets/js/7.b4d90be9.js",
    "revision": "84c4417d224592294cb7790e9b9389d3"
  },
  {
    "url": "assets/js/70.51883659.js",
    "revision": "2d410859ee3129965c235e13fc452ac5"
  },
  {
    "url": "assets/js/71.9ff55cae.js",
    "revision": "419ebb1ea92978b1f671f39dda61898a"
  },
  {
    "url": "assets/js/72.d54e184f.js",
    "revision": "f2e4bf1736a119bf4cf64ff00df27df8"
  },
  {
    "url": "assets/js/73.5062fbf7.js",
    "revision": "bc78b283b9ae31048931c180cc795bf8"
  },
  {
    "url": "assets/js/74.0721cccd.js",
    "revision": "d49af68ab50fb9a1839553e7fff27aaf"
  },
  {
    "url": "assets/js/75.42dd3581.js",
    "revision": "aa4cadea23d5e24387838fa9961720aa"
  },
  {
    "url": "assets/js/76.d590fa57.js",
    "revision": "1f8c97b93c15464436d4978a16087616"
  },
  {
    "url": "assets/js/77.0e5953f3.js",
    "revision": "8f9155352a5022598311f1744177369b"
  },
  {
    "url": "assets/js/78.4bb79720.js",
    "revision": "8cbeb4bee2096a9f9bf0d53a503553e8"
  },
  {
    "url": "assets/js/79.48030292.js",
    "revision": "75eab35609433f52d2eb73adb6a38042"
  },
  {
    "url": "assets/js/80.d036bc22.js",
    "revision": "bbc24d9050230bce1d5807591c60d590"
  },
  {
    "url": "assets/js/81.d6524746.js",
    "revision": "5f00839de58f470b7b13af873cf8b15b"
  },
  {
    "url": "assets/js/82.93460687.js",
    "revision": "e2e3271b8625d02cc3e9de7464af4d2e"
  },
  {
    "url": "assets/js/83.7c6f2e4a.js",
    "revision": "7dd9cc34309a0a8de59c611620e75adf"
  },
  {
    "url": "assets/js/84.83b1808d.js",
    "revision": "08ae1744f051453e5619472d121c8e28"
  },
  {
    "url": "assets/js/85.14c12ffc.js",
    "revision": "e54c43986c6485d4ee1007f3fe971178"
  },
  {
    "url": "assets/js/86.893b5c41.js",
    "revision": "77263d41b81ff4f66b244a57afef6e04"
  },
  {
    "url": "assets/js/87.7d10879f.js",
    "revision": "244ead157b0ccebdfe36b58dd6a1212b"
  },
  {
    "url": "assets/js/88.ef12068f.js",
    "revision": "289792f9370c8c43a08b3573759ff48e"
  },
  {
    "url": "assets/js/89.cc81e4e4.js",
    "revision": "d72ad9a76c0e8faafc55f0272245a197"
  },
  {
    "url": "assets/js/90.130454fc.js",
    "revision": "0d01a7d15a60414e6d1529138d249e04"
  },
  {
    "url": "assets/js/91.838da398.js",
    "revision": "b090c0ed0c7e766165360960115cd8d5"
  },
  {
    "url": "assets/js/92.22813cd9.js",
    "revision": "d6996931da0d03e5c05da8a80f37c618"
  },
  {
    "url": "assets/js/93.2000427b.js",
    "revision": "9d2df629182316d88897dcf371acf473"
  },
  {
    "url": "assets/js/94.062717c8.js",
    "revision": "d889c55727fc8074b03f2cec30d7a78f"
  },
  {
    "url": "assets/js/95.9cc81974.js",
    "revision": "26710d9513eb8294010a2b69f3d4ef60"
  },
  {
    "url": "assets/js/96.0457546b.js",
    "revision": "b875c0ce9261350654acc6e911b22bae"
  },
  {
    "url": "assets/js/97.71d6bbd5.js",
    "revision": "5444fd7a26f86f0c04dc4cc4d2c8e61f"
  },
  {
    "url": "assets/js/98.e6299973.js",
    "revision": "8214821faee5932c577194d6ba15bb5e"
  },
  {
    "url": "assets/js/99.b198a395.js",
    "revision": "89e66e16d4ef6c7d183b01506fbb8657"
  },
  {
    "url": "assets/js/app.4a61619a.js",
    "revision": "48d110a28c0afed2054e7d238f62c56d"
  },
  {
    "url": "assets/js/vendors~docsearch.00f0a528.js",
    "revision": "4bbfd1c17e868067bef220d7e13a227c"
  },
  {
    "url": "assets/js/vendors~flowchart.d07b8b19.js",
    "revision": "cb89420181c9b218c7180a99f11a2d78"
  },
  {
    "url": "assets/js/vendors~notification.877bb3fc.js",
    "revision": "25ef81e79def6aeb64f58e9eb265faf7"
  },
  {
    "url": "Cybersecurity/index.html",
    "revision": "9ba473f625a412a2bd39b74e8a9bcf02"
  },
  {
    "url": "Cybersecurity/kali-linux-settings/kali-linux-basic-settings.html",
    "revision": "6729b03d77ffc093e36104287e98df82"
  },
  {
    "url": "Cybersecurity/kali-linux-settings/kali-linux-install.html",
    "revision": "f512799286e6b404a7b9a464c90b7c28"
  },
  {
    "url": "Cybersecurity/kali-linux-settings/kali-linux-penetration-test.html",
    "revision": "5faaf3a89f12974590029e142a9091c7"
  },
  {
    "url": "Cybersecurity/kali-linux-settings/kali-linux-social-engineering.html",
    "revision": "2c14cfb06ccde04e710e36e7d174a56d"
  },
  {
    "url": "Cybersecurity/kali-linux-settings/kali-linux-sql-injection.html",
    "revision": "a8f6598158db015ef7f9401b8a898b89"
  },
  {
    "url": "Cybersecurity/kali-linux-settings/kali-linux-toc.html",
    "revision": "348ee66c6e7bbb48d86f9dfeaf012434"
  },
  {
    "url": "Cybersecurity/Was-Hacked.html",
    "revision": "cdad6b4906248c32f0ebd7747ce9fb73"
  },
  {
    "url": "docker/docker-cheat-sheet.html",
    "revision": "4e8b328d27d1115d99542d281fb9b3ab"
  },
  {
    "url": "docker/docker-compose.html",
    "revision": "2e6a75b85e7233c99cc7f86af6146ed1"
  },
  {
    "url": "docker/docker-dockerfile.html",
    "revision": "dc1e8515a7a5e2b7fd2ae33da218a847"
  },
  {
    "url": "docker/docker-quickstart.html",
    "revision": "c7b70976711a87ba491d502124aebb53"
  },
  {
    "url": "docker/index.html",
    "revision": "faecf53f726613ec1006066809a953ab"
  },
  {
    "url": "docker/K8S-Install-And-Usage.html",
    "revision": "aae8af439d8cd3bf2e4e4c6fc1552409"
  },
  {
    "url": "docker/Kubernetes-Install-And-Usage.html",
    "revision": "b752b30b8bf887e8e1ab9f0fd34ca4fc"
  },
  {
    "url": "docker/kubernetes.html",
    "revision": "95063144a698e8cc40c881b8e50a7fe1"
  },
  {
    "url": "docker/service/docker-install-mysql.html",
    "revision": "f0b9b5f231e512ee450209fb16c2ef91"
  },
  {
    "url": "docker/service/docker-install-nginx.html",
    "revision": "e3e61db30bb1058f0bba71c41329e636"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "093b00dd4d593d64a5df5db264af966d"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "d4cd765d5a1c89ca8e52cab2b1406f8d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "62e5c876b3a32afc69e1a8a3d152fca3"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "e87362ecef0a5b85e40eb9724c344269"
  },
  {
    "url": "index.html",
    "revision": "31370abbbb4d6cbbbd515b4b8843c7a4"
  },
  {
    "url": "linux/cli/free.html",
    "revision": "67bfbca89c8be2a263fd0e4237c16a07"
  },
  {
    "url": "linux/cli/grep.html",
    "revision": "2c50b6b8f3031a4b80f425b87c54966b"
  },
  {
    "url": "linux/cli/index.html",
    "revision": "0d33c93aeb92c9559da0b7997e8e5511"
  },
  {
    "url": "linux/cli/iostat.html",
    "revision": "711dd9d83a1d040c43534e0b9912f800"
  },
  {
    "url": "linux/cli/iotop.html",
    "revision": "7247390ee5dbd7f478a6ba182c5e8e7c"
  },
  {
    "url": "linux/cli/linux-cli-dir.html",
    "revision": "bf69ec013466d23c54f50dc5209f5f07"
  },
  {
    "url": "linux/cli/linux-cli-file-compress.html",
    "revision": "b040a77e4d1ff18cf2b47d0e6ec33e47"
  },
  {
    "url": "linux/cli/linux-cli-file.html",
    "revision": "74dd6bd9955f1bb46ceb0736867964a6"
  },
  {
    "url": "linux/cli/linux-cli-hardware.html",
    "revision": "8972c8f370b0e7d4868e546a6d67cf70"
  },
  {
    "url": "linux/cli/linux-cli-help.html",
    "revision": "da73f55be215982ad784469b328c28b2"
  },
  {
    "url": "linux/cli/linux-cli-net.html",
    "revision": "68339a9bd95581ff171244c61d7fe2bc"
  },
  {
    "url": "linux/cli/linux-cli-software.html",
    "revision": "e7f42410add9250c68c27c362fe97193"
  },
  {
    "url": "linux/cli/linux-cli-system.html",
    "revision": "cd48e49226d0806a2f5fb9f32bc58a3e"
  },
  {
    "url": "linux/cli/linux-cli-user.html",
    "revision": "ec3b5937aa16bd5b224a5ce9f4f3c6dd"
  },
  {
    "url": "linux/cli/scp.html",
    "revision": "33489299f07e3e7c5f829801cf0648ab"
  },
  {
    "url": "linux/cli/top.html",
    "revision": "a97b0fd3a4f5886a1bb66f559ec8f450"
  },
  {
    "url": "linux/cli/vmstat.html",
    "revision": "4ee8435c82389507faccb6a462491338"
  },
  {
    "url": "linux/cli/命令行的艺术.html",
    "revision": "5390be628929ce6fe02febfffd94a920"
  },
  {
    "url": "linux/expect.html",
    "revision": "8eabde286f2d60b77e73886fc59ecb43"
  },
  {
    "url": "linux/Linux.html",
    "revision": "7cf3f5990fb10c8599dcfa894614d468"
  },
  {
    "url": "linux/ops/crontab.html",
    "revision": "e4c272d7429af804e84a8b8a7b04a488"
  },
  {
    "url": "linux/ops/firewalld.html",
    "revision": "5360893a5497f12b050c55dd4bd66ea4"
  },
  {
    "url": "linux/ops/Glances-Install-And-Settings.html",
    "revision": "ed9e659432008c5c18a9f3d1550f0488"
  },
  {
    "url": "linux/ops/index.html",
    "revision": "630f670a8faa1a18c23d9601069acb12"
  },
  {
    "url": "linux/ops/iptables.html",
    "revision": "1ee248a006c7c6da5def35a544b67450"
  },
  {
    "url": "linux/ops/monitor.html",
    "revision": "735a2ab69092b17a76e602fd68f45b34"
  },
  {
    "url": "linux/ops/network-ops.html",
    "revision": "2832e7d72d22e026d51ceb9e6c9b4923"
  },
  {
    "url": "linux/ops/ntp.html",
    "revision": "766a03cf8bc2d7431722d24265d83e78"
  },
  {
    "url": "linux/ops/samba.html",
    "revision": "c60f4d20ca961472e28bf9adc6e4bff7"
  },
  {
    "url": "linux/ops/systemd.html",
    "revision": "d7f544a169dac81b4a95c6fec54405bd"
  },
  {
    "url": "linux/ops/vim.html",
    "revision": "0f1bf87f8a095a72eabdd71fa2c9404f"
  },
  {
    "url": "linux/ops/zsh.html",
    "revision": "8d832cadd0e0ea38bdeb5cabd9d18760"
  },
  {
    "url": "linux/soft/apollo/index.html",
    "revision": "16bcecdb5da495d16cda9993c8cac8d0"
  },
  {
    "url": "linux/soft/Databases/MongoDB-Install-And-Settings.html",
    "revision": "9d7990c7ce45bf4b593f67c232b061df"
  },
  {
    "url": "linux/soft/Databases/mongodb-ops.html",
    "revision": "6778c138ff136a0debe51dc0ba71bbec"
  },
  {
    "url": "linux/soft/Databases/Mysql-Install-And-Settings.html",
    "revision": "3402b779a7dee8538a08d14623becb54"
  },
  {
    "url": "linux/soft/Databases/Mysql-Optimize.html",
    "revision": "5afff0088af05609b56ecb8cadf87ca4"
  },
  {
    "url": "linux/soft/Databases/Mysql-Test.html",
    "revision": "2a9f4b2299a731033705e513a095caf7"
  },
  {
    "url": "linux/soft/Databases/Mysql-Tutorial.html",
    "revision": "32b2d53e0c3bb58dd50c161e56fc8053"
  },
  {
    "url": "linux/soft/Databases/PostgreSQL-Install-And-Settings.html",
    "revision": "6199922484a82feefd968e6228b3be1b"
  },
  {
    "url": "linux/soft/Databases/Redis-Install-And-Settings.html",
    "revision": "14a6bd1bb358b5119e3b5d445e13717b"
  },
  {
    "url": "linux/soft/elastic/elastic-beats.html",
    "revision": "6bcb5e770a44de12893c69c15b365336"
  },
  {
    "url": "linux/soft/elastic/elastic-kibana.html",
    "revision": "3f92e8dc7b342c509909c5c30d00c1f8"
  },
  {
    "url": "linux/soft/elastic/elastic-logstash.html",
    "revision": "4624d3d4f67cff70a361e9c6f5b63eee"
  },
  {
    "url": "linux/soft/elastic/elastic-quickstart.html",
    "revision": "da5ed98a0f80f82dabdd349055b53f22"
  },
  {
    "url": "linux/soft/elastic/index.html",
    "revision": "b0b20026f80cd8678825ccb9f754a3e8"
  },
  {
    "url": "linux/soft/fastdfs.html",
    "revision": "7f12ffa03841fe9a66b617e8c2477f93"
  },
  {
    "url": "linux/soft/gitlab-ops.html",
    "revision": "c98fa06a0fc89aa36dcc6efcfcb43f9b"
  },
  {
    "url": "linux/soft/index.html",
    "revision": "964b418e29adacd385a1b8c54438895e"
  },
  {
    "url": "linux/soft/jdk-install.html",
    "revision": "76376e19ff23734105e870d0bbc22de3"
  },
  {
    "url": "linux/soft/jenkins-ops.html",
    "revision": "90e4ab8a1f35a40b9fbfc87574fad117"
  },
  {
    "url": "linux/soft/JMeter-Install-And-Settings.html",
    "revision": "67b66a4a002cf13f9008696f44079145"
  },
  {
    "url": "linux/soft/kafka-install.html",
    "revision": "7f3e51b64f6307521925b8ad44046751"
  },
  {
    "url": "linux/soft/Maven-Install-And-Settings.html",
    "revision": "aa9aac738d846b6a560f3222151dc8d0"
  },
  {
    "url": "linux/soft/maven-install.html",
    "revision": "97a253138e13e3b0eddd250a40e7021c"
  },
  {
    "url": "linux/soft/nacos-install.html",
    "revision": "2887b677d982509d929ef7735e7002d3"
  },
  {
    "url": "linux/soft/nexus-ops.html",
    "revision": "37dbde2d9e519978158e23809b8bc3a3"
  },
  {
    "url": "linux/soft/Nginx&Tomcat/Nginx-Install-And-Settings.html",
    "revision": "1708c9f2ae8072f35669d82d9db03d30"
  },
  {
    "url": "linux/soft/Nginx&Tomcat/Nginx-Keepalived-Install-And-Settings.html",
    "revision": "4ed6844f0f24952e73a1f7d26a3f775b"
  },
  {
    "url": "linux/soft/Nginx&Tomcat/tomcat-install.html",
    "revision": "87a9eceb0dd8588621fcc1d60a25bafa"
  },
  {
    "url": "linux/soft/Node-Install-And-Usage.html",
    "revision": "46552122cf5d7bdff43ccea567b2f0d5"
  },
  {
    "url": "linux/soft/nodejs-install.html",
    "revision": "af4f90f4d94737d4a9e9e0265573643b"
  },
  {
    "url": "linux/soft/rocketmq-install.html",
    "revision": "33228ecca6b6fe991523daa1a5c660a3"
  },
  {
    "url": "linux/soft/svn-ops.html",
    "revision": "9c4505ad7db44c1220f3e97d019232b1"
  },
  {
    "url": "linux/soft/yapi-ops.html",
    "revision": "5ba8aa90d9e383e1688651b101c6032a"
  },
  {
    "url": "mac/soft/ruby-install.html",
    "revision": "38d6a386fa1549c9d14ab458f506213d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
