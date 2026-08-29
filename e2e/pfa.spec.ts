import { expect, test } from "@playwright/test";

test("80k net sets CASS on the real base, not the floor", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "PfaDesk" })).toBeVisible();
  await expect(page.getByTestId("author-credit")).toContainText("Alessandro Alghisi");
  await expect(page.getByTestId("cass")).toHaveText("8000 lei");
  await expect(page.getByTestId("cas")).toHaveText("12150 lei");
});
