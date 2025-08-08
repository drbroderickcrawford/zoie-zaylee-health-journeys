import React, { useState } from "react";
import { BookOpen, Sparkles, Megaphone, Image as ImageIcon, PlayCircle, Download, Mail, Info, Heart, Smile, Shield, Stethoscope, Hospital } from "lucide-react";

// Minimal UI helpers
function Button({ className = "", children, variant = "default", ...props }) {
  const base = "inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition";
  const variants = {
    default: "bg-amber-500 text-white hover:bg-amber-600",
    outline: "border border-amber-300 text-amber-700 bg-white hover:bg-amber-50"
  };
  return (
    <button className={`${base} ${variants[variant] || ""} ${className}`} {...props}>{children}</button>
  );
}
function Card({ className = "", children }) {
  return <div className={`rounded-2xl shadow-sm bg-white ${className}`}>{children}</div>;
}
function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function Input({ className = "", ...props }) {
  return <input className={`border rounded px-3 py-2 w-full ${className}`} {...props} />;
}
function Textarea({ className = "", ...props }) {
  return <textarea className={`border rounded px-3 py-2 w-full ${className}`} {...props} />;
}

export default function App() {
  const [email, setEmail] = useState("");

  const features = [
    { icon: Stethoscope, title: "Gentle Health Education", text: "Stories help kids and parents understand medical visits, treatments, and emotions." },
    { icon: Heart, title: "Feelings & Courage", text: "Emphasizes bravery, honesty, and handling tough days together." },
    { icon: Hospital, title: "Hospital Heroes", text: "Introduces the people and places that help keep us well." },
    { icon: Shield, title: "Parent Guidance", text: "Conversation tips, vocabulary, and support for grown-ups." },
  ];

  const episodes = [
    {
      title: "The First Hospital Visit",
      subtitle: "Zoie & Zaylee learn about doctors, nurses, and what to expect.",
      cta: { label: "Preview", href: "#" },
      tags: ["Ages 4–8", "Emotions", "Medical Visits"],
    },
    {
      title: "Why I Need Medicine",
      subtitle: "Explaining treatments and medicines in a child-friendly way.",
      cta: { label: "Preview", href: "#" },
      tags: ["Ages 4–8", "Understanding", "Support"],
    },
    {
      title: "Super Siblings",
      subtitle: "When a brother or sister needs care—how we help each other.",
      cta: { label: "Preview", href: "#" },
      tags: ["Ages 4–8", "Family", "Empathy"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smile className="w-6 h-6" />
            <span className="font-semibold">Zoie & Zaylee: Kids’ Health Journeys</span>
          </div>
          <div className="hidden md:flex gap-2">
            <a href="#about" className="text-sm hover:underline">About</a>
            <a href="#books" className="text-sm hover:underline">Stories</a>
            <a href="#gallery" className="text-sm hover:underline">Gallery</a>
            <a href="#audio" className="text-sm hover:underline">Audio</a>
            <a href="#parents" className="text-sm hover:underline">Parents & Educators</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-4 pt-10 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm mb-4">
              <Sparkles className="w-4 h-4" /> Gentle Health Stories for Kids & Families
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Meet <span className="underline decoration-wavy decoration-pink-300">Zoie & Zaylee</span>
            </h1>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl">
              Sisters who face doctor visits, big feelings, and new routines together—with curiosity, honesty, and a lot of heart.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#books"><Button size="lg" className="rounded-full"><BookOpen className="w-4 h-4 mr-2" /> Explore Stories</Button></a>
              <a href="#newsletter"><Button size="lg" variant="outline" className="rounded-full"><Megaphone className="w-4 h-4 mr-2" /> Get Updates</Button></a>
            </div>
          </div>
          <div>
            <Card>
              <CardContent>
                <div className="text-sm text-slate-600">What Makes Us Different</div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  {features.map((f) => (
                    <div key={f.title} className="flex gap-3">
                      <f.icon className="w-5 h-5 mt-1" />
                      <div>
                        <div className="font-medium">{f.title}</div>
                        <div className="text-sm text-slate-600">{f.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">About Zoie & Zaylee</h2>
            <p className="text-slate-600 mt-3">
              Zoie (the big sister) likes to know what’s coming next—she asks lots of questions at every checkup. Zaylee (the little sister) finds the fun, even on tough days. Together, they help each other through medical adventures, learning how to talk about fears, celebrate small victories, and support family members who need extra care.
            </p>
          </div>
          <Card>
            <CardContent>
              <div className="text-sm text-slate-600">For Parents & Caregivers</div>
              <ul className="list-disc ml-6 text-sm text-slate-600 mt-2 space-y-1">
                <li>Stories built for bedtime, waiting rooms, or classroom circle time.</li>
                <li>Gentle language, practical takeaways, and family conversation prompts.</li>
                <li>Downloadable guides for navigating doctor visits (coming soon).</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* STORIES */}
      <section id="books" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-4"><BookOpen className="w-5 h-5" /><h2 className="text-2xl font-semibold">Stories</h2></div>
        <div className="grid md:grid-cols-3 gap-4">
          {episodes.map((e) => (
            <Card key={e.title}>
              <CardContent>
                <div className="text-lg font-semibold">{e.title}</div>
                <div className="text-sm text-slate-600">{e.subtitle}</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {e.tags.map((t) => (
                    <span key={t} className="text-xs bg-amber-100 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="pt-2"><Button size="sm" variant="outline">{e.cta.label}</Button></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-4">
          <ImageIcon className="w-5 h-5" />
          <h2 className="text-2xl font-semibold">Illustration Gallery</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <figure className="rounded-2xl overflow-hidden border bg-white">
            <img src="/images/the-first-hospital-visit.png" alt="Zoie & Zaylee: The First Hospital Visit" className="w-full h-64 object-cover" />
            <figcaption className="p-3 text-sm text-slate-600">The First Hospital Visit</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border bg-white">
            <img src="/images/why-i-need-medicine.png" alt="Zoie & Zaylee: Why I Need Medicine" className="w-full h-64 object-cover" />
            <figcaption className="p-3 text-sm text-slate-600">Why I Need Medicine</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border bg-white">
            <img src="/images/super-siblings.png" alt="Zoie & Zaylee: Super Siblings" className="w-full h-64 object-cover" />
            <figcaption className="p-3 text-sm text-slate-600">Super Siblings</figcaption>
          </figure>
        </div>
      </section>

      {/* AUDIO */}
      <section id="audio" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-4"><PlayCircle className="w-5 h-5" /><h2 className="text-2xl font-semibold">Audio Stories</h2></div>
        <Card>
          <CardContent>
            <p className="text-slate-600">Listen to gentle narration for comfort during appointments or bedtime. Audio player coming soon!</p>
            <div className="mt-4 flex gap-3">
              <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Sample MP3</Button>
              <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Printable PDF</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* PARENTS & EDUCATORS */}
      <section id="parents" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-4"><Info className="w-5 h-5" /><h2 className="text-2xl font-semibold">Parents & Educators</h2></div>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <div className="font-medium">How to Use These Stories</div>
              <ul className="list-disc ml-6 text-sm text-slate-600 space-y-1">
                <li>Support open talks about feelings, change, and health.</li>
                <li>Pair with activity sheets, coloring pages, or memory books.</li>
                <li>Help siblings and friends understand the journey together.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="font-medium">Our Approach</div>
              <ul className="list-disc ml-6 text-sm text-slate-600 space-y-1">
                <li>Never scary—always hopeful and honest.</li>
                <li>Emphasis on inclusion, family, and courage.</li>
                <li>Resources for parents navigating tough conversations.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* STORY PREVIEW */}
      <section id="read" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-4"><BookOpen className="w-5 h-5" /><h2 className="text-2xl font-semibold">The First Hospital Visit</h2></div>
        <p className="text-sm text-slate-500 mb-4">By Dr. Broderick Crawford</p>
        <div className="prose prose-slate max-w-none">
          <p>Zoie squeezed Zaylee’s hand as they walked through the big glass doors. Everything smelled clean and bright. “Will it hurt?” whispered Zaylee.</p>
          <p>Zoie shook her head, remembering what Mom said: “We’re here to help your body feel better. The nurses and doctors are kind.”</p>
          <p>They passed the fish tank and a wall covered in drawings from other kids. “Let’s draw a picture after!” said Zoie, trying to sound brave.</p>
          <p>Inside the room, a nurse named Maya smiled and showed them the stethoscope. “Want to listen to your heart?”</p>
          <p>Zaylee nodded. The sound was soft and fast, like butterfly wings. “That’s your heart working hard for you,” said Maya.</p>
          <p>Zoie asked questions about the machines and stickers. The nurse answered each one, never rushing.</p>
          <p>When the doctor came in, he kneeled to their level. “You can ask anything,” he said.</p>
          <p>After the checkup, Mom hugged them tight. “I’m proud of you,” she said. Zoie smiled at Zaylee. “We did it—together.”</p>
        </div>
        <div className="mt-6 flex gap-3">
          <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Download Printable PDF</Button>
          <Button variant="outline"><PlayCircle className="w-4 h-4 mr-2" /> Listen to Narration</Button>
        </div>
      </section>

      {/* NEWSLETTER / CONTACT */}
      <section id="newsletter" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-4"><Mail className="w-5 h-5" /><h2 className="text-2xl font-semibold">Get Updates</h2></div>
        <Card>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Parent/Teacher Name" />
              <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Textarea rows={4} placeholder="What topics or guides would help your family/classroom? (e.g., hospital routines, coping, sibling support)" />
            <div className="flex items-center justify-between mt-4">
              <Button>Subscribe</Button>
              <div className="text-xs text-slate-600">Kid-safe updates. Opt-out anytime.</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-4"><Mail className="w-5 h-5" /><h2 className="text-2xl font-semibold">Contact</h2></div>
        <Card>
          <CardContent>
            <p className="text-slate-600">For permissions, school pilots, or to share your family’s story, drop a note. Please—no personal child data in this form.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Email" />
            </div>
            <Textarea rows={5} placeholder="Message (no personal child data)." />
            <div className="flex gap-3 mt-4">
              <Button>Send</Button>
              <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Media Kit (PDF)</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2"><Smile className="w-5 h-5" /><span className="font-semibold">Zoie & Zaylee</span></div>
            <p className="text-sm text-slate-600 mt-2">© {new Date().getFullYear()} Zoie & Zaylee. All rights reserved.</p>
          </div>
          <div>
            <div className="font-medium">Quick Links</div>
            <ul className="text-sm text-slate-600 mt-2 space-y-1">
              <li><a className="hover:underline" href="#books">Stories</a></li>
              <li><a className="hover:underline" href="#gallery">Gallery</a></li>
              <li><a className="hover:underline" href="#audio">Audio</a></li>
              <li><a className="hover:underline" href="#parents">Parents & Educators</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Disclosures</div>
            <p className="text-sm text-slate-600 mt-2">This site is for families and schools. We do not collect personal child data. Contact us for permissions and classroom use.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
