export default function getHomeDirectory(): string | undefined {
    const home = Deno.env.get("HOME");  // *nix
    const userProfile = Deno.env.get("USERPROFILE"); // Windoze
    return home || userProfile;
}
