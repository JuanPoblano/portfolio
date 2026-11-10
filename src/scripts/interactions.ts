import { syncThemeControl } from "./theme";
import { editorial } from "../i18n/editorial";

import {
  translations,
  supportedLanguages,
  type Language,
} from "../i18n/translations";

const storageKey = "juan-portfolio-language";

function isLanguage(value: string | null): value is Language {
  return value !== null && supportedLanguages.includes(value as Language);
}

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(storageKey);
    if (isLanguage(saved)) return saved;
  } catch {
    // Continue with browser language detection.
  }

  const browserLanguage = navigator.language.toLowerCase().split("-")[0];

  return isLanguage(browserLanguage) ? browserLanguage : "en";
}

function getTranslation(language: Language, key: string): string | undefined {
  if (editorial[language]?.[key] !== undefined) return editorial[language][key];
  const parts = key.split(".");
  let value: unknown = translations[language];

  for (const part of parts) {
    if (
      value === null ||
      typeof value !== "object" ||
      !(part in value)
    ) {
      return undefined;
    }

    value = (value as Record<string, unknown>)[part];
  }

  return typeof value === "string" ? value : undefined;
}

export function setLanguage(language: Language): void {
  document.documentElement.lang = language;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
  const key = element.dataset.i18n;
  if (!key) return;

  const value = getTranslation(language, key);

  if (value !== undefined) {
    const attribute = element.dataset.i18nAttr;
    if (attribute) {
      element.setAttribute(attribute, value);
    } else {
      element.textContent = value;
    }
  }
});

  document.querySelectorAll<HTMLButtonElement>("[data-language]").forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  const activeImage = document.querySelector<HTMLImageElement>(
    "[data-aircraft-image][aria-pressed='true'] img",
  );
  const mainImage = document.querySelector<HTMLImageElement>(
    "[data-aircraft-main-image]",
  );

  if (activeImage && mainImage) {
    mainImage.alt = activeImage.alt;
  }

  syncThemeControl();

  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // Language still works when storage is unavailable.
  }
}

export function initializeLanguage(): void {
  setLanguage(getInitialLanguage());

  document.querySelectorAll<HTMLButtonElement>("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
     const language = button.dataset.language ?? null;

if (isLanguage(language)) {
  setLanguage(language);
}
    });
  });

  const mainImage = document.querySelector<HTMLImageElement>(
    "[data-aircraft-main-image]",
  );

  document
    .querySelectorAll<HTMLButtonElement>("[data-aircraft-image]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const selectedImage = button.querySelector("img");
        if (!mainImage || !selectedImage) return;

        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;
        mainImage.toggleAttribute(
          "data-aircraft-image-fit",
          button.dataset.aircraftImageFit === "contain",
        );

        document
          .querySelectorAll<HTMLButtonElement>("[data-aircraft-image]")
          .forEach((item) => {
            const selected = item === button;
            item.classList.toggle("is-active", selected);
            item.setAttribute("aria-pressed", String(selected));
          });
      });
    });
}
