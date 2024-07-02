import { renderHook } from "@testing-library/react-hooks";
import useTheme from "../../src/hooks/useTheme";
import { describe, expect, it, vi, beforeEach } from "vitest";

vi.mock("../../src/hooks/useSessionStorage", () => ({
  __esModule: true,
  default: vi.fn(() => ["dark", vi.fn()]),
}));

describe("useTheme", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should respect system theme preference", () => {
    // Mocking matchMedia to simulate system preference of dark mode
    vi.spyOn(window, "matchMedia").mockImplementation((query: string) => ({
      matches: query.includes("dark"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useTheme());

    // Assuming the system preference is dark
    expect(result.current.isDark).toBe(true);
  });
});
