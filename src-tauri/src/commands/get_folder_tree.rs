use git2::Repository;
use walkdir::WalkDir;

#[tauri::command]
pub fn get_folder_tree(path: String, hide_git_ignored: Option<bool>) -> Vec<String> {
    let mut found_entries: Vec<String> = vec![];
    let repo = Repository::open(&path);

    for entry in WalkDir::new(&path) {
        let entry = entry.unwrap().path().display().to_string();

        // User requested to hide .gitignore`d files
        if hide_git_ignored.unwrap_or_default() && !repo.as_ref().is_err() {
            let repo_obj = repo.as_ref().unwrap();

            if repo_obj
                .is_path_ignored(&entry)
                .expect("Skipping not ignored file.")
            {
                continue;
            }
        }

        found_entries.push(entry);
    }

    found_entries
}