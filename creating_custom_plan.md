To create a custom plan path in the Gemini CLI, set up a specific directory for storing planning artifacts (Markdown files). By default, these files are in a temporary directory at ~/.gemini/tmp/<project>/<session-id>/plans/. You can change this to a project-specific path. [1, 2, 3, 4, 5]

1. Set Up the Custom Directory [6]
   Edit your settings.json file to set a custom plan path. This file is usually at ~/.gemini/settings.json for global settings or your-project/.gemini/settings.json for project-specific overrides. [1, 7, 8, 9]
   Add this configuration:

{
"general": {
"plan": {
"directory": ".gemini/plans"
}
}
}

- Restriction: The directory you set must be within the project root boundary for security.
- Extensions: If you are building an extension, define this in your gemini-extension.json manifest. [1, 2, 10]

2. Update Safety Policies
   Plan Mode has strict security. You must allow the CLI to write and replace files in your new directory. Create a policy file at ~/.gemini/policies/plan-custom-directory.toml: [1, 11, 12]

[[rule]]
toolName = ["write_file", "replace"]
decision = "allow"
priority = 100
modes = ["plan"]

# Matches .md files in the .gemini/plans directory of any project

argsPattern = '.\*\.gemini[\\/]+plans[\\/]+[\w-]+\.md'

3. Usage and Verification

- Enter Plan Mode: Type /plan or press Shift+Tab.
- View Plans: The CLI outputs a plan to your directory. Open it manually or press Ctrl+X to open it in your default external editor.
- Settings Dialog: Manage these settings by typing the [/settings command](https://geminicli.com/docs/cli/settings/). [1, 7, 13, 14, 15]

[1] [https://geminicli.com](https://geminicli.com/docs/cli/plan-mode/)
[2] [https://geminicli.com](https://geminicli.com/docs/extensions/reference/)
[3] [https://geminicli.com](https://geminicli.com/docs/cli/plan-mode/#:~:text=Custom%20plan%20directory%20and%20policies%0A%0ABy%20default%2C%20planning,directory%20are%20restricted%20to%20the%20project%20root.)
[4] [https://medium.com](https://medium.com/google-cloud/practical-gemini-cli-bring-your-own-system-instruction-19ea7f07faa2#:~:text=gemini%20directory%20at%20the%20project%27s%20root.%20This,absolute%20path%20to%20a%20custom%20markdown%20file.)
[5] [https://geminicli.com](https://geminicli.com/docs/cli/plan-mode/#:~:text=Custom%20plan%20directory%20and%20policies%20By%20default%2C,directory%20are%20restricted%20to%20the%20project%20root.)
[6] [https://cloud.google.com](https://cloud.google.com/blog/topics/developers-practitioners/gemini-cli-custom-slash-commands)
[7] [https://geminicli.com](https://geminicli.com/docs/cli/settings/)
[8] [https://google-gemini.github.io](https://google-gemini.github.io/gemini-cli/docs/get-started/configuration.html)
[9] [https://medium.com](https://medium.com/google-cloud/gemini-cli-tutorial-series-part-3-configuration-settings-via-settings-json-and-env-files-669c6ab6fd44)
[10] [https://www.linkedin.com](https://www.linkedin.com/pulse/beyond-prompt-deep-dive-googles-gemini-cli-extensions-allan-smeyatsky-br5af)
[11] [https://geminicli.com](https://geminicli.com/docs/cli/plan-mode/#:~:text=Customization%20and%20best%20practices%20Plan%20Mode%20is,where%20plans%20are%20stored%2C%20or%20adding%20hooks.)
[12] [https://geminicli.com](https://geminicli.com/docs/cli/plan-mode/#:~:text=Custom%20policies%20Plan%20Mode%27s%20default%20tool%20restrictions,policies%20in%20your%20~/.gemini/policies/%20directory%20%28Tier%202%29.)
[13] [https://developers.googleblog.com](https://developers.googleblog.com/plan-mode-now-available-in-gemini-cli/)
[14] [https://geminicli.com](https://geminicli.com/docs/cli/plan-mode/)
[15] [https://geminicli.com](https://geminicli.com/docs/cli/plan-mode/#:~:text=Edit:%20Press%20Ctrl+X%20to%20open%20the%20plan%20directly%20in%20your%20configured%20external%20editor.)
