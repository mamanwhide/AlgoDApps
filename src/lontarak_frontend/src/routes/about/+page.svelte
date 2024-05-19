<script>
    import Content from "../../components/Content.svelte";
    import Navbar from "../../components/Navbar.svelte";
</script>

<Navbar />

<Content>
<main class="h-screen relative">
    <img src="https://ik.imagekit.io/nurman/AlgoDapps/about-coffee.gif?updatedAt=1716071959495" alt="about-coffee">
    <section class="glass-box h-72 w-2/3 p-6 absolute inset-y-0 right-0 z-50">
        <h1 class="font-nico text-6xl text-white">Misi :</h1>
        <ul class="font-nova text-white list-disc ml-6 mt-6">
            <li>Meningkatkan Pengalaman Pelanggan: Kami ingin memudahkan pelanggan memesan dan membayar kopi mereka dengan teknologi blockchain yang aman dan transparan</li>
            <li>Membangun Komunitas: Kami ingin menciptakan ruang yang ramah dan inklusif bagi para mahasiswa dan pecinta kopi untuk berjejaring, belajar, dan berkreasi.</li>
            <li>Mendorong Inovasi: Kami ingin menjelajahi potensi Web3 dan blockchain untuk merevolusi industri kopi dan memberikan nilai tambah bagi pelanggan dan mitra kam</li>
        </ul>
    </section>

    <section class="glass-box h-64 w-10/12 p-2 absolute bottom-0 left-0 pl-64">
        <h1 class="font-nico text-6xl text-white">AlgoDApps</h1>
        <ul class="font-nova text-white list-disc ml-6 mt-6">
            <li>Pembayaran Blockchain: Pesan dan bayar kopi Anda dengan aman dan mudah menggunakan mata uang kripto atau token Algo Coffee kami.</li>
            <li>Pemesanan Berbasis Blockchain: Hindari antrian dan pesan kopi Anda terlebih dahulu melalui aplikasi Algo Coffee kami</li>
            <li>Program Loyalitas Blockchain: Dapatkan hadiah dan manfaat eksklusif dengan menggunakan token Algo Coffee Anda.</li>
        </ul>
    </section>
</main>
  
</Content>