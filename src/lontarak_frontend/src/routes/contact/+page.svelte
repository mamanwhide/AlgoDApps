<script>
    import Content from "../../components/Content.svelte";
    import Navbar from "../../components/Navbar.svelte";
</script>

<Navbar />

<Content>
    <main class="h-screen relative">
        <img src="https://ik.imagekit.io/nurman/AlgoDapps/alien.gif?updatedAt=1716070179925" class="absolute top-0 right-0 h-96" alt="alien">
        <section class="glass-box h-auto p-6 w-4/5 z-20">
            <h1 class="font-nico text-white text-5xl">Contact Us</h1>
                <form action="submit" class="flex w-full text-white font-nova gap-8 mt-6 mb-3">
                    <div class="flex-1">
                        <label for="name">Name :</label>
                        <input id="name" type="text" class="w-full bg-transparent border-2 border-white rounded-2xl py-2 px-3  text-xs leading-tight focus:outline-none focus:shadow-outline" placeholder="...">
                        <label for="Message">Message :</label>
                        <textarea class="w-full bg-transparent border-2 border-white rounded-3xl py-2 px-3  text-2xl leading-tight focus:outline-none focus:shadow-outline h-40" placeholder="......."></textarea>
                    </div>
                    <div class="flex-1">
                        <label for="email">Email :</label>
                        <input name="email" class="w-full bg-transparent border-2 border-white rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" placeholder=".....">
                        <label for="subject">Subject :</label>
                        <input name="email" class="w-full bg-transparent border-2 border-white rounded-2xl py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" placeholder=".....">
                    </div>
                </form>
        </section>


        <section class="glass-box h-auto w-3/5 p-6 absolute right-0 z-50 bottom-20">
            <form action="submit" class="font-nova text-white">
                <label for="address">Address :</label>
                <textarea class="w-full bg-transparent border-2 border-white rounded-3xl py-2 px-3  text-2xl leading-tight focus:outline-none focus:shadow-outline" placeholder="......."></textarea>
                <label for="email" class="block">Email :</label>
                <input name="email" class="bg-transparent border-2 border-white rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder=".....">
                <label for="email" class="block">Call Us :</label>
                <input name="email" class=" bg-transparent border-2 border-white rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-3/5" placeholder=".....">
                

            </form>
        </section>
    </main>


</Content>