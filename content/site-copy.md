# kemiztech.com.au — site copy reference

Source of truth for the text currently live on kemiztech.com.au (built with VentraIP's
VIPsites builder — no exportable source, so this doc is the only version-controlled
record of the copy). Update this file whenever the live site's wording changes.

## Site identity

- Website name / header: `KEMIZTECH | Apps & Creative Tools`
- SEO title: `KEMIZTECH | Apps & Creative Tools`
- SEO description: Adam Wood builds thoughtful apps and tools for Android and Windows,
  including Lunecarta (an art and creativity app), OTGExplorer, OtgxDesktop, and Salvage
  for moving and recovering files.

## Intro banner (hero)

**Heading:** Thoughtful apps and tools for creativity and everyday life

**Body:**
I'm Adam Wood, an app developer creating accessible art and utility software that's
useful, clear, and easy to use. After four years researching and developing apps, I
bring creative thinking and practical problem solving to every project.

Explore Lunecarta, my art app for Android, or browse my file-recovery tools for Android
and Windows, or get in touch for app support, feedback, and enquiries.

**Button:** Explore Lunecarta

## About Me

**Heading:** About Adam

**Body:**
I'm Adam, an app developer focused on creating art and utility software that's useful,
accessible, and easy to use. Over four years of researching and developing apps, I've
combined creative thinking with practical problem solving to build clear, thoughtful
experiences across Android and Windows.

My work spans two areas: art and creativity, including apps that support artistic
expression and exploration; and everyday utilities, including file-browsing and recovery
tools that make phones, cards, and PCs more useful. I'm currently featuring Lunecarta on
Android, alongside OTGExplorer, OtgxDesktop, and Salvage for moving and recovering files.

This site shares my apps, updates, and support information. If you have feedback or need
help, please contact me at adam89wood@gmail.com.

## What I Build

**Heading:** What I Build

**Body:** I create apps and tools that balance creative expression with everyday
usefulness, for Android and Windows. Each project is shaped by clear features,
thoughtful interface design, accessibility-minded decisions, and a straightforward
experience.

### Art & Creative Apps
I develop apps that help people explore ideas, make art, and express themselves.
Lunecarta is an example of this focus, bringing creativity into an accessible Android
experience.

### Everyday Utility Tools
I build practical tools that simplify common tasks and make phones and PCs more useful.
The goal is focused functionality without unnecessary complexity.

### User-Focused Interface Design
I plan screens and features around how people actually use an app. Clear navigation,
readable content, and approachable interactions help each experience feel simple from
the start.

### Testing & Refinement
I test features, review usability, and improve the details that affect reliability and
ease of use. Ongoing refinement helps each app become more stable and useful over time.

### Support & Continued Improvement
I welcome feedback and provide support as apps develop. With four years of researching
and developing apps, I use real-world insight to guide updates and future improvements.

## Apps gallery

**Heading:** Featured apps

### Lunecarta
**Art and creativity app**
Lunecarta is an Android app for artistic expression and creative exploration. It is
designed around clear features, thoughtful interaction, and an easy-to-use experience.

Highlights:
- Supports creative exploration without unnecessary complexity
- Built with accessibility and straightforward navigation in mind
- Designed to make artistic ideas easier to explore on a phone

Links: Google Play listing · Lunecarta website

### OTGExplorer
**File explorer app**
OTGExplorer is an Android app for browsing USB-OTG drives, SD cards, and camera cards
straight from your phone, including RAW photo formats most file managers can't open.

Highlights:
- Native USB-OTG and SD card browsing
- RAW photo format support (CR2, ARW, NEF, and more)
- Lightweight — a focused file browser, not a bloated suite

### OtgxDesktop
**Windows file browser & recovery**
OtgxDesktop is a fast Windows file browser that doesn't give up when a file goes
missing. Browse drives normally, run a quick signature-carve on a suspect file, or step
up to Deep Recovery for forensic-grade undelete when it matters — powered by the Salvage
engine.

Highlights:
- Drives tab for everyday file browsing
- Recover tab for quick signature carving
- Deep Recovery tab for forensic-grade undelete
- Only requests elevated access when Deep Recovery needs it

### Salvage
**Forensic recovery engine**
Salvage reads volumes the way a forensic examiner would: direct $MFT parsing on NTFS,
directory-tree undelete on FAT32 and exFAT, raw Windows volume access, and byte-accurate
signature carving when there's no filesystem left to trust. A native Rust core keeps it
fast, with both a CLI and a desktop app on top.

Highlights:
- Native Rust core for fast, low-overhead recovery
- NTFS $MFT parsing with forensic timeline reconstruction
- FAT32, exFAT, and FAT12-16 directory-tree undelete
- Marker-aware signature carving so recovered files aren't truncated

## Known gaps / TODOs

- Lunecarta's "Google Play listing" and "Lunecarta website" links are placeholders
  (point to example.com) — update once Lunecarta is actually published.
- OTGExplorer, OtgxDesktop, and Salvage have no "View"/store links wired up yet — none
  of the three are published anywhere. Add links once release-ready.
- No Google AdSense integration on kemiztech.com.au: VIPsites has no custom
  code/header-script injection anywhere in its editor (checked Settings, Admin, SEO,
  Theme, page settings, and the VentraIP account-level Marketing section). The
  `site/index.html` file in this repo is a separate standalone page that already has
  the AdSense script wired in, for a platform that supports it.
