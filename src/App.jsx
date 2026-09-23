function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a
            href="#home"
            className="text-2xl font-bold text-indigo-400"
          >
            El<span className="text-white">.</span>
          </a>

          <div className="hidden gap-8 md:flex">

            <a
              href="#home"
              className="text-slate-300 hover:text-indigo-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-300 hover:text-indigo-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-300 hover:text-indigo-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-300 hover:text-indigo-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-indigo-400"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>


      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center pt-20"
      >

        <div className="mx-auto w-full max-w-6xl px-6">

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>

              <p className="mb-4 font-semibold text-indigo-400">
                HELLO, I'M
              </p>

              <h1 className="mb-4 text-5xl font-bold md:text-7xl">
                Novia Fitriani
              </h1>

              <h2 className="mb-6 text-2xl font-semibold text-slate-300 md:text-3xl">
                Information Systems Student
              </h2>

              <p className="mb-8 max-w-xl leading-relaxed text-slate-400">
                Saya adalah mahasiswa Sistem Informasi yang
                tertarik pada pengembangan website, UI/UX,
                database, dan teknologi informasi.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
                >
                  Lihat Project
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-indigo-400"
                >
                  Hubungi Saya
                </a>

              </div>

            </div>


            {/* FOTO / PROFILE */}
            <div className="flex justify-center">

              <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 md:h-80 md:w-80">

                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-slate-900 md:h-72 md:w-72">

                  <span className="text-7xl font-bold text-indigo-400">
                    Via
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="bg-slate-900 py-24"
      >

        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-12 text-center">

            <p className="mb-2 font-semibold text-indigo-400">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-bold">
              Tentang Saya
            </h2>

          </div>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-lg leading-relaxed text-slate-400">
              Saya merupakan mahasiswa Sistem Informasi yang
              sedang mempelajari berbagai bidang teknologi
              informasi. Saya memiliki ketertarikan pada web
              development, database, UI/UX, serta analisis
              dan perancangan sistem.
            </p>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section
        id="skills"
        className="py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12 text-center">

            <p className="mb-2 font-semibold text-indigo-400">
              MY SKILLS
            </p>

            <h2 className="text-4xl font-bold">
              Skills
            </h2>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center hover:border-indigo-500">

              <div className="mb-4 text-3xl font-bold text-orange-400">
                HTML
              </div>

              <h3 className="font-semibold">
                HTML
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Struktur website
              </p>

            </div>


            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center hover:border-indigo-500">

              <div className="mb-4 text-3xl font-bold text-blue-400">
                CSS
              </div>

              <h3 className="font-semibold">
                CSS / Tailwind
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Styling website
              </p>

            </div>


            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center hover:border-indigo-500">

              <div className="mb-4 text-3xl font-bold text-yellow-400">
                JS
              </div>

              <h3 className="font-semibold">
                JavaScript
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Interaksi website
              </p>

            </div>


            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center hover:border-indigo-500">

              <div className="mb-4 text-3xl font-bold text-green-400">
                SQL
              </div>

              <h3 className="font-semibold">
                Database
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                MySQL & SQL
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-slate-900 py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12 text-center">

            <p className="mb-2 font-semibold text-indigo-400">
              MY WORK
            </p>

            <h2 className="text-4xl font-bold">
              Projects
            </h2>

          </div>


          <div className="grid gap-8 md:grid-cols-3">


            {/* PROJECT 1 */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">

              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">

                <span className="text-2xl font-bold">
                  WEB
                </span>

              </div>

              <div className="p-6">

                <h3 className="mb-3 text-xl font-bold">
                  Landing Page
                </h3>

                <p className="mb-4 text-sm text-slate-400">
                  Landing page menggunakan React,
                  Vite, dan Tailwind CSS.
                </p>

                <a
                  href="#"
                  className="font-semibold text-indigo-400"
                >
                  View Project →
                </a>

              </div>

            </div>


            {/* PROJECT 2 */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">

              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">

                <span className="text-2xl font-bold">
                  DATABASE
                </span>

              </div>

              <div className="p-6">

                <h3 className="mb-3 text-xl font-bold">
                  Sistem Database
                </h3>

                <p className="mb-4 text-sm text-slate-400">
                  Perancangan database menggunakan
                  ERD, MySQL, dan SQL.
                </p>

                <a
                  href="#"
                  className="font-semibold text-indigo-400"
                >
                  View Project →
                </a>

              </div>

            </div>


            {/* PROJECT 3 */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">

              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">

                <span className="text-2xl font-bold">
                  UI/UX
                </span>

              </div>

              <div className="p-6">

                <h3 className="mb-3 text-xl font-bold">
                  UI/UX Research
                </h3>

                <p className="mb-4 text-sm text-slate-400">
                  Analisis pengalaman pengguna dan
                  perancangan antarmuka aplikasi.
                </p>

                <a
                  href="#"
                  className="font-semibold text-indigo-400"
                >
                  View Project →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="py-24"
      >

        <div className="mx-auto max-w-3xl px-6 text-center">

          <p className="mb-2 font-semibold text-indigo-400">
            CONTACT
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Mari Terhubung
          </h2>

          <p className="mb-8 text-slate-400">
            Jika ingin berdiskusi mengenai project atau
            ingin terhubung, silakan hubungi saya.
          </p>

          <a
            href="mailto:emailkamu@gmail.com"
            className="inline-block rounded-lg bg-indigo-600 px-8 py-3 font-semibold hover:bg-indigo-500"
          >
            Email Saya
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <p className="text-slate-500">
            © 2026 Via. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App