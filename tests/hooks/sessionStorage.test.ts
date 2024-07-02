import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import useSessionStorage from "../../src/hooks/useSessionStorage";

describe("useSessionStorage", () => {
  const key = "testKey";
  const initialValue = "testValue";

  beforeEach(() => {
    sessionStorage.clear();
    vi.spyOn(Storage.prototype, "setItem");
    vi.spyOn(Storage.prototype, "getItem");
    vi.spyOn(Storage.prototype, "removeItem");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should use initial value if there is no value in session storage", () => {
    const { result } = renderHook(() => useSessionStorage(key, initialValue));

    expect(result.current[0]).toBe(initialValue);
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(initialValue)
    );
  });

  it("should retrieve an existing value from session storage", () => {
    sessionStorage.setItem(key, JSON.stringify(initialValue));
    const { result } = renderHook(() => useSessionStorage(key));

    expect(result.current[0]).toBe(initialValue);
  });

  it("should set a new value in session storage", () => {
    const newValue = "newValue";
    const { result } = renderHook(() => useSessionStorage(key, initialValue));

    act(() => {
      result.current[1](newValue);
    });

    expect(result.current[0]).toBe(newValue);
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(newValue)
    );
  });

  it("should clear the session storage for the key", () => {
    const { result } = renderHook(() => useSessionStorage(key, initialValue));

    act(() => {
      result.current[2](); // clear function
    });

    expect(sessionStorage.removeItem).toHaveBeenCalledWith(key);
    expect(sessionStorage.getItem(key)).toBeNull();
  });
});
